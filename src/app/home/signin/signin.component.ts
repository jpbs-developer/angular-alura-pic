import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, User } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  loginForm!: FormGroup;
  @ViewChild('inputUserName') inputUserName!: ElementRef<HTMLInputElement>;
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  login() {
    const user = this.loginForm.getRawValue() as User;
    this.auth.authenticate(user).subscribe({
      next: (res) => this.router.navigate(['photos/user', user.userName]),
      error: (err) => {
        this.loginForm.reset();
        (
          this.renderer.selectRootElement(
            this.inputUserName.nativeElement
          ) as HTMLInputElement
        ).focus();
      },
    });
  }

  get userName() {
    return this.loginForm.get('userName');
  }
  get password() {
    return this.loginForm.get('password');
  }
}
