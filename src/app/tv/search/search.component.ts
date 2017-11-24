import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {Show, ShowResponse} from '../tv.models';
import 'rxjs/add/operator/map';
import {TvMazeService} from '../tv-maze.service';
import {BookmarksService} from '../../bookmarks/bookmarks.service';

// users.map(({username, email}) => ({username, email}));


@Component({
  selector: 'tm-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  shows: Show[] = [];
  query = 'flash';

  constructor(private tv: TvMazeService,
              private bs: BookmarksService) {
    this.search(this.query);

    console.log(this.bs.version);
  }

  ngOnInit() {
  }

  search(query: string) {
    this.tv.searchShows(query)
      .subscribe(shows => this.shows = shows);
  }

  getBookmarks(): Show[] {
    return this.bs.getAll() as Show[];
  }

  isBookmarked(show: Show) {
    return this.bs.has(show.id);
  }

}
