import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {

  public urlCurrent:string

  constructor(private router:Router) {

    this.urlCurrent = this.router.url

  }

  buttonRegister() {
    this.router.navigateByUrl('/home')
  }

  buttonUpdateRegister() {
    this.router.navigateByUrl('/home')
  }



}
