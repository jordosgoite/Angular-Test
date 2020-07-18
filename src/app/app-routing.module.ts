import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router'
import {CharactersComponent} from './characters/characters.component'
import {ComicsComponent} from './comics/comics.component'
import { CreatorsComponent } from './creators/creators.component';
import { SeriesComponent } from './series/series.component';
import { BrowserModule } from '@angular/platform-browser';
import { CalcComponent } from './calc/calc.component';

const routes: Routes = [
 {
    path:'', component:CalcComponent, pathMatch:'full'
  },
  {
   path:'characters', component: CharactersComponent, pathMatch:'full'
  },
  {
    path:'comics', component: ComicsComponent, pathMatch:'full'
  },
  {
    path:'creators', component: CreatorsComponent, pathMatch:'full'
  },
  {
    path:'series', component: SeriesComponent, pathMatch:'full'
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
