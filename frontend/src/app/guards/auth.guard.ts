import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem(environment.localUser)) {
      return true;
    } 
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    return false;

  }
}
