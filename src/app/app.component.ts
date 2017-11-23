import {Component} from '@angular/core';
import {NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';

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
  isLoading = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.isLoading = true;
      } else if (event instanceof NavigationEnd
        || event instanceof NavigationError) {
        this.isLoading = false;
      }
    });
  }

  handleClick(msg: any) {
    console.log('CLICK', msg);
    this.title += msg;
  }
}
