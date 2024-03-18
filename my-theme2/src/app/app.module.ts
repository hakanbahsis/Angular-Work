import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsComponent } from './components/layouts/layouts.component';
import { RouterModule } from '@angular/router';
import { routes } from './router';
import { NavbarComponent } from './components/layouts/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SidenavHeaderComponent } from './components/layouts/sidenav-header/sidenav-header.component';
import { FooterComponent } from './components/layouts/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutsComponent,
    NavbarComponent,
    HomeComponent,
    SidenavHeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
