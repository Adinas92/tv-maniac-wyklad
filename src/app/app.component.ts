import { Component } from '@angular/core';

@Component({
  selector: 'tm-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tm';

  handleClick(msg: any) {
    console.log('CLICK', msg);
    this.title += msg;
  }
}
