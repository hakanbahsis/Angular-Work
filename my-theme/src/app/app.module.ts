import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LayoutsComponent } from './components/layouts/layouts.component';
import { routes } from './router';
import { NavbarComponent } from './components/layouts/navbar/navbar.component';
import { AsideComponent } from './components/layouts/aside/aside.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { LeftAsideComponent } from './components/layouts/left-aside/left-aside.component';
import { BlankComponent } from './components/blank/blank.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutsComponent,
    NavbarComponent,
    AsideComponent,
    FooterComponent,
    LeftAsideComponent,
    BlankComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
