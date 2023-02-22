import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { googleAPI, NASAAPI } from 'src/api-key';

@Component({
  selector: 'app-pod',
  templateUrl: './pod.component.html',
  styleUrls: ['./pod.component.css']
})
export class PODComponent {

  constructor(private http: HttpClient) {}

  date: number | Date = Date.now();
  picUrl: string = "";

  getPOD() : void {
    const url = `https://api.nasa.gov/planetary/apod?&date=${this.date}&api_key=${NASAAPI}`;
    console.log(this.date);

    this.http.get(url).subscribe({
      next: (data: any) => {
        console.log(data);
        this.picUrl = data.url
      },
      error: (err: any) => {
        console.log(err);
      }
    })
  }

}
