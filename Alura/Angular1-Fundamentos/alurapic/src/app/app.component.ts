import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  photos: Array<any> = [];

  constructor(http:HttpClient) {
    http
    .get<Array<any>>('http://localhost:3000/flavio/photos')
    .subscribe((photos) => {
      this.photos = photos;
      console.log(this.photos[0]);
    });
  }
}
