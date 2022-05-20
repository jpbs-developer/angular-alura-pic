import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserService } from '../user/user.service';

export interface User {
  userName: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private userService: UserService) {}

  authenticate({ userName, password }: User): Observable<HttpResponse<any>> {
    return this.http
      .post<User>(
        `${environment.api}/user/login`,
        {
          userName,
          password,
        },
        {
          observe: 'response',
        }
      )
      .pipe(
        tap((res) => {
          const token = res.headers.get('x-access-token') ?? '';
          this.userService.setToken(token);
        })
      );
  }
}
