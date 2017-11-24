import { Directive } from '@angular/core';

@Directive({
  selector: '[tmIsBookmarked]'
})
export class IsBookmarkedDirective {

  constructor() {
    console.log('Hello from directive');
  }

}
