import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, ViewEncapsulation} from '@angular/core';
import {Show} from '../tv.models';
import {get} from 'lodash';
import {ActivatedRoute} from '@angular/router';
import {ShowDetailsComponent} from '../show-details/show-details.component';

enum Size {md = 'medium', lg = 'original'}

@Component({
  selector: 'tm-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PosterComponent implements OnChanges {
  @Input() show: Show;
  @Input() size: Size;
  displayLink = false;
  posterUrl: string;
  private placeholder = 'http://powerpeople.club/wp-content/uploads/2014/02/default-placeholder-1024x1024-570x570.png';

  constructor(route: ActivatedRoute) {
    this.displayLink = route.component !== ShowDetailsComponent;
  }

  ngOnChanges() {
    const sizeKey = Size[this.size] || Size.lg;
    this.posterUrl = get(this.show, ['image', sizeKey], this.placeholder);
  }

}
