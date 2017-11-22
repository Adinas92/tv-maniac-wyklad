import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Show} from '../tv.models';
import {get} from 'lodash';

enum Size {md = 'medium', lg = 'original'}

@Component({
  selector: 'tm-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class PosterComponent implements OnInit {
  @Input() show: Show;
  @Input() size: Size;
  posterUrl: string;
  private placeholder = 'http://powerpeople.club/wp-content/uploads/2014/02/default-placeholder-1024x1024-570x570.png';

  constructor() {
  }

  ngOnInit() {
    const sizeKey = Size[this.size] || Size.lg;
    this.posterUrl = get(this.show, ['image', sizeKey], this.placeholder);
  }

}
