import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private service: UserService, private router: Router) {}
  canActivate(): boolean {
    if (this.service.isLogged()) {
      const userName = this.service.user.name;
      this.router.navigate(['photos/user', userName]);
      return false;
    }
    return true;
  }
}
