import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ap-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  // Recebe  parametro de fora

  @Input() description = '';
  @Input()  url="";

  constructor() { }

  ngOnInit(): void {
  }

}
