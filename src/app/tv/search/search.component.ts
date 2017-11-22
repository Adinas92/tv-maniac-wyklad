import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {Show, ShowResponse} from '../tv.models';
import 'rxjs/add/operator/map';

// users.map(({username, email}) => ({username, email}));


@Component({
  selector: 'tm-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  shows: Show[] = [];

  constructor(http: Http) {
    const url = 'http://api.tvmaze.com/search/shows?q=flash';
    http.get(url)
      .map(response => response.json() as ShowResponse[])
      .map(showResponses => showResponses.map(({show}) => show))
      .subscribe(shows => this.shows = shows);
  }

  ngOnInit() {
  }

}
