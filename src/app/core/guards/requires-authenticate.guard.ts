import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root',
})
export class RequiresAuthenticateGuard implements CanActivate {
  constructor(private service: UserService, private router: Router) {}
  canActivate(): boolean {
    if (!this.service.isLogged()) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}
