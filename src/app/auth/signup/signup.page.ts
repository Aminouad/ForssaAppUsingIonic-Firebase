

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {

  signup = { email: '', password: '' };
  submitted = false;

  constructor(private authService: AuthService,private router:Router) { }
  ngOnInit() {
  }
  onSignup(form: NgForm) {
    if (form.valid) {
      if(form.control.value.email){
      this.authService.signUpWithEmail({ email: form.control.value.email, password: form.control.value.password});}
      if(!form.control.value.emai){ alert("mail exist") }
           
    else{
      alert("verify your information")
    }
   
  }
  }allerlogin(){
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

}