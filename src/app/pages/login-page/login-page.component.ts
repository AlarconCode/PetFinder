import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  email:string;
  password:string;
  constructor(private router:Router) {
  }

  login(){
    console.log(this.email);
    console.log(this.password);
    this.router.navigateByUrl('/home')
  }

}
