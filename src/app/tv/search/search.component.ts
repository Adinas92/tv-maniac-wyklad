import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {Show, ShowResponse} from '../tv.models';
import 'rxjs/add/operator/map';
import {TvMazeService} from '../tv-maze.service';
import {BookmarksService} from '../../bookmarks/bookmarks.service';
import {FormBuilder, FormGroup} from '@angular/forms';

// users.map(({username, email}) => ({username, email}));


@Component({
  selector: 'tm-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  shows: Show[] = [];
  query = 'flash';
  form: FormGroup;

  constructor(private tv: TvMazeService,
              private bs: BookmarksService,
              private fb: FormBuilder) {
    this.search(this.query);

    const queryControl = this.fb.control('flash');
    this.form = this.fb.group({
      query: queryControl
    });
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
