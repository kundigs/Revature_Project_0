import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { googleAPI, NASAAPI } from 'src/api-key';

@Component({
  selector: 'app-location-search',
  templateUrl: './location-search.component.html',
  styleUrls: ['./location-search.component.css']
})
export class LocationSearchComponent {

  constructor(private http: HttpClient) {}

  addNum: string = "";
  street: string = "";
  city: string = "";
  state: string = "";
  country: string = "";
  lat: number = 0;
  lon: number = 0;
  picUrl: string = "";
  date: number | Date = Date.now();

  getCoords(): void {
    const url_1 = `https://maps.googleapis.com/maps/api/geocode/json?address=
    ${this.addNum}%20${this.street}%20${this.city}%20${this.state}%20${this.country}&key=${googleAPI}`;
  
    this.http.get(url_1).subscribe({
      next: (data: any) => {
        console.log(data);
        this.lat = data.results[0].geometry.location.lat;
        this.lon = data.results[0].geometry.location.lng;
        console.log(this.lat);
        console.log(this.lon);
        this.picUrl = `http://127.0.0.1:5000/v5000/earth/imagery/?lon=${this.lon}&lat=${this.lat}&dim=0.32&date=${this.date}`;
      },
      error: (err: any) => {
        console.log(err);
      }
    })
  }
}
