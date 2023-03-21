import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  
  constructor(public router: Router, private location:Location){}

  goBack(){
    this.location.back();
  }

  afterLogin() {
    this.router.navigateByUrl('/home')
  }

}
