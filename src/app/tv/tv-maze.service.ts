import {Injectable} from '@angular/core';
import {Show, ShowDetails, ShowResponse} from './tv.models';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class TvMazeService {
  private readonly baseUrl = 'http://api.tvmaze.com';

  constructor(private http: HttpClient) {
  }

  searchShows(query: string): Observable<Show[]> {
    const url = `${this.baseUrl}/search/shows?q=${query}`;
    return this.http.get<ShowResponse[]>(url)
      .map(showResponses => showResponses.map(({show}) => show));
  }

  getShow(id: string): Observable<ShowDetails> {
    const url = `${this.baseUrl}/shows/${id}?embed=episodes`;
    return this.http.get<ShowDetails>(url);
  }

}
