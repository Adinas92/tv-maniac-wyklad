import {Component, Input, OnInit} from '@angular/core';
import {Bookmark} from '../bookmarks.models';
import {BookmarksService} from '../bookmarks.service';

@Component({
  selector: 'tm-bookmark-add',
  templateUrl: './bookmark-add.component.html',
  styleUrls: ['./bookmark-add.component.scss']
})
export class BookmarkAddComponent {
  @Input() item: Bookmark;

  constructor(private bs: BookmarksService) {
  }

  save() {
    this.bs.add(this.item);
  }

  isBookmarked(): boolean {
    return this.bs.has(this.item.id);
  }
}
