import {Component, Input, OnInit} from '@angular/core';
import {Bookmark} from '../bookmarks.models';
import {BookmarksService} from '../bookmarks.service';

@Component({
  selector: 'tm-bookmark-remove',
  templateUrl: './bookmark-remove.component.html',
  styleUrls: ['./bookmark-remove.component.scss']
})
export class BookmarkRemoveComponent {
  @Input() item: Bookmark;

  constructor(private bs: BookmarksService) {
  }

  remove() {
    this.bs.remove(this.item.id);
  }

  isBookmarked(): boolean {
    return this.bs.has(this.item.id);
  }
}
