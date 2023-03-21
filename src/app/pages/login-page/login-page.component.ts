import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
<<<<<<< HEAD
  email:string;
  password:string;
  constructor(private router:Router) {
=======
  
  constructor(public router: Router, private location:Location){}

  goBack(){
    this.location.back();
>>>>>>> main
  }

  login(){
    console.log(this.email);
    console.log(this.password);
    this.router.navigateByUrl('/home')
  }

}
