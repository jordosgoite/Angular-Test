import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { SerieDetailComponent } from './seriedetail.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [
        SerieDetailComponent, 
      ],
    imports: [
    CommonModule,
    BrowserModule
    ,
    RouterModule.forRoot([
      
        {path: 'series/:id' , component:SerieDetailComponent}
  
      ])
    ]
})
    export class SerieDetailModule { }