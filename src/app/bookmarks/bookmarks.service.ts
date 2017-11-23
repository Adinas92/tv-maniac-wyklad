import {Injectable} from '@angular/core';
import {Bookmark, BookmarkId} from './bookmarks.models';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class BookmarksService {
  version = 1;
  private items: Bookmark[] = [];
  private readonly apiBaseUrl = 'http://localhost:3000/bookmarks';

  constructor(private http: HttpClient) {
    this.http.get<Bookmark[]>(this.apiBaseUrl)
      .subscribe(items => this.items = items);
  }

  getAll(): Bookmark[] {
    return [...this.items];
  }

  add(item: Bookmark): void {
    this.http.post(this.apiBaseUrl, item)
      .subscribe(() => {
        this.items = [...this.items, item];
      });
  }

  remove(id: BookmarkId): void {
    this.http.delete(`${this.apiBaseUrl}/${id}`)
      .subscribe(() => {
        this.items = this.items.filter(item => item.id !== id);
      });
  }

  has(id: BookmarkId): boolean {
    return this.items.some(item => item.id === id);
  }
}
