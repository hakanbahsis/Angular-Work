import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl:'./app.component.html',
  styleUrl: './app.component.scss',
  template: `
 <h1>Routing</h1>
 <a routerLink="/c1">C1 Component </a> || <a routerLink="/c2">C2 Component</a> || <a routerLink="/c3"> C3 Component</a>
 <router-outlet></router-outlet>
 
  `,
})
export class AppComponent {
  name:string="Hakan Bahşiş";
  //name : string | number | undefined | null | boolean | Date | object =10; => birden fazla değişken türü alabilir
  //string
  //number
  //boolean
  //date
  //any
  //name="Hakan Bahşiş";
  age:number = 10;//tsconfig dosyasına  "strictNullChecks": false ekledik

  constructor(){
    console.log(this.age)
  }

  metot(){
    alert(this.name);
  }

  getValue(){
    let element:any=document.getElementById("name");
    console.log(element.value);
  }

  getValuee(event:any ){
    console.log(event.target.value);
  }

  @ViewChild("nameChild") test:ElementRef<HTMLInputElement>;

  getValueChild(){
    console.log(this.test.nativeElement.value);
  }

  mName:string="Hakan Bahşiş";

  getNameValue(){
    console.log(this.mName)
  }



  }

