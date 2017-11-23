import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ShowDetailsParams} from '../../app-routing.module';
import {Show} from '../tv.models';
import {TvMazeService} from '../tv-maze.service';

@Component({
  selector: 'tm-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.scss']
})
export class ShowDetailsComponent implements OnInit {
  show: Show;

  constructor(private route: ActivatedRoute,
              private tv: TvMazeService) {
    // this.route.params.subscribe(p => console.log(p));
    const { id } = this.route.snapshot.params as ShowDetailsParams;
    this.tv.getShow(id)
      .subscribe(show => this.show = show);
  }

  ngOnInit() {
  }

}
