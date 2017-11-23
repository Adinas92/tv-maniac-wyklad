import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BookmarksService} from './bookmarks.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    BookmarksService
  ],
  declarations: []
})
export class BookmarksModule { }
