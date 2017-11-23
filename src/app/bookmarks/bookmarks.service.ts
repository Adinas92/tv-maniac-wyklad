import {Injectable} from '@angular/core';
import {Bookmark, BookmarkId} from './bookmarks.models';

@Injectable()
export class BookmarksService {
  version = 1;
  private items: Bookmark[] = [];

  constructor() {
  }

  getAll(): Bookmark[] {
    return [...this.items];
  }

  add(item: Bookmark): void {
    this.items = [...this.items, item];
  }

  remove(id: BookmarkId): void {
    this.items = this.items.filter(item => item.id !== id);
  }

  has(id: BookmarkId): boolean {
    return this.items.some(item => item.id === id);
  }
}
