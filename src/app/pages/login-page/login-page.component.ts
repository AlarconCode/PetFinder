import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import Swal from 'sweetalert2';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  public user : User;
  public loginForm:FormGroup;



  constructor(private router: Router, private location: Location, public userService: UserService, private fb:FormBuilder)  // private authService:authService
  {
    this.userService.user;
    this.userService.logueado;
  }


  goBack() {
    this.location.back();
  }

  login(passwordInput: HTMLInputElement, emailInput: HTMLInputElement) {
    let user: User = new User(0, "", passwordInput.value, emailInput.value, "", 0)
    if(this.userService.login(user)==true){
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Logueado correctamente',
        showConfirmButton: false,
        timer: 1500
      });
      this.router.navigateByUrl('/home')
    } else {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Usuario no existe',
        showConfirmButton: false,
        timer: 1500
      });

    }

  }

}
