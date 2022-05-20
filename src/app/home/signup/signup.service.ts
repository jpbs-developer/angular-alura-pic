import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { debounceTime, first, map, Observable, switchMap, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
export interface NewUser {
  userName: string;
  email: string;
  fullName: string;
  password: string;
}
@Injectable({
  providedIn: 'root',
})
export class SignupService {
  constructor(private http: HttpClient) {}

  checkUserNameTaken(userName: string): Observable<boolean> {
    return this.http.get<boolean>(`${environment.api}/user/exists/${userName}`);
  }

  checkUserNameTakenValidator() {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        debounceTime(300),
        switchMap((userName) => this.checkUserNameTaken(userName)),
        map((isTaken) => (isTaken ? { userNameTaken: true } : null)),
        first()
      );
    };
  }

  signup(newUser: NewUser): Observable<NewUser> {
    return this.http.post<NewUser>(`${environment.api}/user/signup`, newUser);
  }
}
