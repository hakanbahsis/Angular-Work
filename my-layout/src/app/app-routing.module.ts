import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './Components/layouts/layouts.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';
import { LoginComponent } from './Components/login/login.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';

const routes: Routes = [
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"",
    component:LayoutsComponent,
    children:[
      {
        path:"",
        component:HomeComponent
      },
      {
        path:"home",
        component:HomeComponent
      },
      {
        path:"about",
        component:AboutComponent
      },
      {
        path:"contact",
        component:ContactComponent
      },
      {
        path:"**",
        component:NotFoundComponent
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
