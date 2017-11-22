import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {Show, ShowResponse} from '../tv.models';
import 'rxjs/add/operator/map';
import {TvMazeService} from '../tv-maze.service';

// users.map(({username, email}) => ({username, email}));


@Component({
  selector: 'tm-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  shows: Show[] = [];

  constructor(private tv: TvMazeService) {

  }

  ngOnInit() {
  }

  search(query: string) {
    this.tv.searchShows(query)
      .subscribe(shows => this.shows = shows);
  }

}
