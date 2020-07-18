import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { CharacterDetailComponent } from './characterdetail.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [
        CharacterDetailComponent, 
      ],
    imports: [
    CommonModule,
    BrowserModule
    ,
    RouterModule.forRoot([
      
        {path: 'characters/:id' , component:CharacterDetailComponent}
  
      ])
    ]
})
    export class CharacterDetailModule { }