import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ShowDetailsParams} from '../../app-routing.module';
import {ShowDetails} from '../tv.models';
import {TvMazeService} from '../tv-maze.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';

@Component({
  selector: 'tm-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.scss']
})
export class ShowDetailsComponent implements OnInit {
  show: ShowDetails;
  episodesLength = 2;

  constructor(private route: ActivatedRoute) {
    // this.route.params.subscribe(p => console.log(p));
    this.show = this.route.snapshot.data.show;
    if (this.show._embedded.episodes.some(({number}) => number > 99)) {
      this.episodesLength = 3;
    }
  }

  ngOnInit() {
  }

}
