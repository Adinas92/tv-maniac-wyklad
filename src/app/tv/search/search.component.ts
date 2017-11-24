import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {Show, ShowResponse} from '../tv.models';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';
import {TvMazeService} from '../tv-maze.service';
import {BookmarksService} from '../../bookmarks/bookmarks.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {startsWithLetterValidator} from '../../shared/validators/starts-with-letter.validator';

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

    const queryControl = this.fb.control('flash', [
      Validators.required,
      startsWithLetterValidator()
    ]);
    this.form = this.fb.group({
      query: queryControl
    });

    this.form.valueChanges
      .map(({query}) => query)
      .do((v) => console.log(v, queryControl.errors))
      .debounceTime(200)
      .filter(() => this.form.valid)
      .subscribe(query => this.search(query));
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
