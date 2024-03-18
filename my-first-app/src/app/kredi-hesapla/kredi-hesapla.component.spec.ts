import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KrediHesaplaComponent } from './kredi-hesapla.component';

describe('KrediHesaplaComponent', () => {
  let component: KrediHesaplaComponent;
  let fixture: ComponentFixture<KrediHesaplaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KrediHesaplaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KrediHesaplaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
