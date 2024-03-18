import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { C1Component } from './components/c1/c1.component';
import { C2Component } from './components/c2/c2.component';
import { C3Component } from './components/c3/c3.component';
import { SharedModule } from './shared.module';
import { NotFoundComponent } from './components/not-found/not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    C1Component,
    C2Component,
    C3Component,
    NotFoundComponent
  ],
  imports: [
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
