import {Component} from '@angular/core';

interface MenuItem {
  path: string;
  label: string;
  exact?: boolean;
}

@Component({
  selector: 'tm-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tm';
  menu: MenuItem[] = [
    {path: '/', label: 'Home', exact: true},
    {path: '/tv', label: 'TV Shows'},
    {path: '/contact', label: 'Contact'},
  ];

  handleClick(msg: any) {
    console.log('CLICK', msg);
    this.title += msg;
  }
}
