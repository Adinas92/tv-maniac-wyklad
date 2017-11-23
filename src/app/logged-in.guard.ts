import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoggedInGuard implements CanActivate {
  constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const isLoggedIn = prompt('Are you logged in?') === 'yes';
    if (!isLoggedIn) {
      this.router.navigateByUrl('/');
    }
    return isLoggedIn;
  }
}
