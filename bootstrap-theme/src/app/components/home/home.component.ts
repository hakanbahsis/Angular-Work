import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isActive:boolean=true;

  changeActiveStatus(){
    this.isActive=!this.isActive;
  }
}
