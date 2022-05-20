import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from '../token/token.service';
import jwt_decode from 'jwt-decode';
export interface User {
  id: number;
  name: string;
  email: string;
}
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSubject = new BehaviorSubject<User | null>(null);
  private _user!: User;

  constructor(private token: TokenService) {
    this.token.hasToken() && this.decodeAndNotify();
  }

  decodeAndNotify() {
    const token = this.token.getToken();
    const user = jwt_decode(token) as User;
    this._user = user;

    this.userSubject.next(user);
  }

  setToken(token: string) {
    this.token.setToken(token);
    this.decodeAndNotify();
  }

  get user() {
    return this._user;
  }

  getUser() {
    return this.userSubject.asObservable();
  }

  logout() {
    this.token.removeToken();
    this.userSubject.next(null);
  }

  isLogged() {
    return this.token.hasToken();
  }
}
