import { Routes } from "@angular/router";
import { LayoutsComponent } from "./components/layouts/layouts.component";
import { BlankComponent } from "./components/blank/blank.component";
import { LoginComponent } from "./components/login/login.component";

export const routes:Routes=[
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
                component:BlankComponent
            }
        ]
    }
]