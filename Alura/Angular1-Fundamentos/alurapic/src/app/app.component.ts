import { Component, OnInit } from '@angular/core';
import { Photo } from './photos/photo/photo';
import { PhotoService } from './photos/photo/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  photos: any[] = [];

  constructor(private photoService: PhotoService) {}
  // Quando inicia o compomenente 
  ngOnInit():void{
    this.photoService.listFromUser('flavio')
    .subscribe(photos => this.photos = photos);
  }
}
