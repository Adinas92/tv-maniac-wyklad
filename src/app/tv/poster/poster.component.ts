import {Component, Input, OnInit} from '@angular/core';
import {Show} from '../tv.models';

enum Size {md = 'medium', lg = 'original'}

@Component({
  selector: 'tm-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss']
})
export class PosterComponent implements OnInit {
  @Input() show: Show;
  @Input() size: Size;
  posterUrl: string;

  constructor() {
  }

  ngOnInit() {
    const sizeKey = Size[this.size];
    this.posterUrl = this.show.image[sizeKey];
  }

}
