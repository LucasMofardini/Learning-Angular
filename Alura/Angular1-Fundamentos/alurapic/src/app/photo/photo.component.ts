import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ap-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  description = 'Leao';
  url="https://www.petz.com.br/blog/wp-content/uploads/2022/01/curiosidades-sobre-leao2.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
