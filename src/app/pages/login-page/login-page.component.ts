import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import Swal from 'sweetalert2';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  public user: User;
  public loginForm: FormGroup;

  constructor(private router: Router, private location: Location, public userService: UserService, private fb: FormBuilder)  // private authService:authService
  {
    this.buildForm()
  }
  // Servicio para volver a la pagina de atras:
  goBack() {
    if (this.userService.logueado) {
      this.location.back();
    } else {
      this.router.navigateByUrl('/home')
    }
  }
  //Validaciones
  private buildForm() {
    const minPassLength=8;
    this.loginForm = this.fb.group({
      email: [, [Validators.required, Validators.email]],
      password: [, [Validators.required, Validators.minLength(minPassLength)]]
    })
  }

  login() {
    this.user = this.loginForm.value;
    console.log(this.loginForm.value)
    console.log(this.user)
    this.userService.login(this.user)
      .subscribe((data: any) => {
        console.log(data)
        if (data.result[0].password == this.user.password && data.result[0].email == this.user.email) {
          this.userService.logueado = true;
          this.userService.user = data.result[0]
          // this.user = data.result[0];
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Logueado correctamente',
            showConfirmButton: false,
            timer: 1500
          });
          this.router.navigateByUrl('/home')
          console.log(this.userService.logueado)
        } else {
          console.log(data.result);
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Usuario no existe',
            showConfirmButton: false,
            timer: 1500
          });
        }
      })
  }
}
