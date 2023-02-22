import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NASAAPI } from 'src/api-key';

@Component({
  selector: 'app-topic-search',
  templateUrl: './topic-search.component.html',
  styleUrls: ['./topic-search.component.css']
})
export class TopicSearchComponent {

  constructor(private http: HttpClient) {}

  numPics : number = 0;
  nasaPics : any[] = [];
  keyword : string = "";

  validation = {
    required: true,
    min : 1,
    max : 25
  }

  getPics() : void {
    const url = `https://images-api.nasa.gov/search?q=${this.keyword}&media_type=image&page_size=1000`;

    this.http.get(url).subscribe({
      next: (data: any) => {
        console.log(data.collection.items.length);
        this.nasaPics = data.collection.items.sort(() => 0.5 - Math.random()).slice(0, this.numPics); 
        console.log(this.nasaPics);
      },
      error: (err: any) => {
        console.log(err);
      }
    })
  }

}
