import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module'
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ScrollingModule } from '@angular/cdk/scrolling'
import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { UserService } from './user.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field'
import { CharacterComponent } from './characters/character/character.component';
import { CharactersComponent } from './characters/characters.component';
import { ComicsComponent } from './comics/comics.component';
import { ComicComponent } from './comics/comic/comic.component';
import { CreatorComponent } from './creators/creator/creator.component';
import { CreatorsComponent } from './creators/creators.component';
import { CalcComponent } from './calc/calc.component'
import { SerieComponent } from './series/serie/serie.component';
import { SeriesComponent } from './series/series.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PipesModule } from 'w-ng5';
import { ComicDetailModule } from './comics/comic/comicdetail.module';
import { CharacterDetailModule } from './characters/character/characterdetail.module';
import { SerieDetailModule } from './series/serie/seriedetail.module';
import { CreatorDetailModule } from './creators/creator/creatordetail.module'
import { characterFilterPipe } from './characters/characters.pipe';
import { comicsFilterPipe } from './comics/comics.pipe';
import { creatorsFilterPipe } from './creators/creators.pipe';
import { seriesFilterPipe } from './series/series.pipe';
import { OwlModule } from 'ngx-owl-carousel';
import { Ng2SearchPipeModule } from 'ng2-search-filter';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CharacterComponent,
    CharactersComponent,
    ComicsComponent,
    ComicComponent,
    CreatorComponent,
    CreatorsComponent,
    SerieComponent,
    SeriesComponent,
    CalcComponent,
    characterFilterPipe,
    comicsFilterPipe,
    seriesFilterPipe,
    creatorsFilterPipe
    
  ],
  imports: [
    
    AppRoutingModule,
    BrowserModule,
    OwlModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    Ng2SearchPipeModule,
    FlexLayoutModule,
    MatCardModule,
    MatFormFieldModule,
    InfiniteScrollModule,
    ScrollingModule,
    NgxSpinnerModule,
    PipesModule,
    ComicDetailModule,
    CharacterDetailModule,
    CreatorDetailModule,
    SerieDetailModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
