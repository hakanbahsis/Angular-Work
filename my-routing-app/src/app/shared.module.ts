import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { routes } from "./router";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    imports:[
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports:[
        BrowserModule,
        RouterModule
    ]
})
export class SharedModule{}