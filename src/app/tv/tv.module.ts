import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import {HttpModule} from '@angular/http';
import { PosterComponent } from './poster/poster.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
  ],
  declarations: [SearchComponent, PosterComponent]
})
export class TvModule { }
