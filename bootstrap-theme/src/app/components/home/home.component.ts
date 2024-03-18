import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isActive: boolean = true;

  changeActiveStatus() {
    this.isActive = !this.isActive;
  }

  meyveAdi:string="";
  meyveler: string[] = ["Elma", "Armut", "Ayva"];

  meyveEkle(){
    this.meyveler.push(this.meyveAdi);
    this.meyveAdi="";
  }

  role:string="admin";
  show:boolean=false;
  todos:string[]=["Example1","Example2","Example3"];
}
