import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  email:string;
  password:string;
  
  
  constructor(public router: Router, private location:Location){}

  goBack(){
    this.location.back();
  }

  login(){
    console.log(this.email);
    console.log(this.password);
    this.router.navigateByUrl('/home')
  }

}
