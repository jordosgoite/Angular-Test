import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { CreatorDetailComponent } from './creatordetail.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [
        CreatorDetailComponent, 
      ],
    imports: [
    CommonModule,
    BrowserModule
    ,
    RouterModule.forRoot([
      
        {path: 'creators/:id' , component:CreatorDetailComponent}
  
      ])
    ]
})
    export class CreatorDetailModule { }