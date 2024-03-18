import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-kredi-hesapla',
  templateUrl: './kredi-hesapla.component.html',
  styleUrl: './kredi-hesapla.component.scss'
})
export class KrediHesaplaComponent {

  krediTutari:number=10000;
  //taksitSayisi:number=1;
  @ViewChild("taksitSayisi") taksitSayisi:ElementRef<HTMLSelectElement>;
   aylikTaksitTutari:number=0;
  hesapla(){
    this.aylikTaksitTutari=this.krediTutari/ +this.taksitSayisi.nativeElement.value;
  }
}
