import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import {HttpModule} from '@angular/http';
import { PosterComponent } from './poster/poster.component';
import {TvMazeService} from './tv-maze.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    TvMazeService,
  ],
  declarations: [SearchComponent, PosterComponent]
})
export class TvModule { }
