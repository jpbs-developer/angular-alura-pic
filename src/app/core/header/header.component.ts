import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User, UserService } from '../user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  user$!: Observable<User | null>;
  constructor(private service: UserService, private router: Router) {
    this.user$ = this.service.getUser();
  }
  logout() {
    this.service.logout();
    this.router.navigate(['']);
  }
}
