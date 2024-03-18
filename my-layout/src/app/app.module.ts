import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsComponent } from './Components/layouts/layouts.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';
import { LoginComponent } from './Components/login/login.component';
import { NavbarComponent } from './Components/layouts/navbar/navbar.component';
import { FooterComponent } from './Components/layouts/footer/footer.component';
import { SidebarComponent } from './Components/layouts/sidebar/sidebar.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutsComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
