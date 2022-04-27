import { Component, Input, OnInit } from '@angular/core';
import { faBars, } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @Input() logo : string;
  faBars = faBars;
  constructor() { }

  ngOnInit(): void {
  }
  toggleModal(){
    
  }
}
