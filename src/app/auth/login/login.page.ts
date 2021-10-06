import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/models/user';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  submitted = false;
  user = { email: '', password: '' };

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  onLogin(form: NgForm): void {
    if (form.valid) {
      this.authService.loginWithEmail({ email: form.control.value.email, password: form.control.value.password });
      this.router.navigateByUrl('home2');
    }
  }

  resetPassword(email: string): void {
    this.authService.resetPassword(email);
  }

  googleAuth(): void {
    this.authService.googleLogin();
    this.router.navigateByUrl('home2');

  }

  allerlogin(){
    this.router.navigateByUrl('/login');
  }
  allerhome(){
    this.router.navigateByUrl('/home');
  }
  allermap(){
    this.router.navigateByUrl('/map');
  }
  allerabout(){
    this.router.navigateByUrl('/about');
  }





  onSignup(): void {
    this.router.navigateByUrl('/signup');
  }
}