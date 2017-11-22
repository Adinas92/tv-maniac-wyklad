import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'tm-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(http: Http) {
    const url = 'http://api.tvmaze.com/search/shows?q=flash';
    http.get(url).subscribe((data) => console.log(data.json()));
    // fetch(url);
  }

  ngOnInit() {
  }

}
