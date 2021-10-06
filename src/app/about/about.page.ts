import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  allerabout(){
    this.router.navigateByUrl('/about');
  }

  allermap(){
    this.router.navigateByUrl('/map');
  }
  allerhome(){
    this.router.navigateByUrl('/home');
  }
  allerlogin() {
    this.router.navigateByUrl('login');
  }
}
