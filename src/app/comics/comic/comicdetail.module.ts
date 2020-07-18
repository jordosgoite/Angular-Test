import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { ComicDetailComponent } from './comicdetail.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [
        ComicDetailComponent, 
      ],
    imports: [
    CommonModule,
    BrowserModule
    ,
    RouterModule.forRoot([
      
        {path: 'comics/:id' , component:ComicDetailComponent}
  
      ])
    ]
})
    export class ComicDetailModule { }