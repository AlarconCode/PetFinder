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
    this.location.back();
  }
  //Validaciones
  private buildForm() {
    this.loginForm = this.fb.group({
      email: [, [Validators.required, Validators.email]],
      password: [, [Validators.required, Validators.minLength(8)]]
    })
  }

  login() {
    this.user = this.loginForm.value;

    this.userService.login(new User(0, "", this.user.password, this.user.email, "", 0))
      .subscribe((data: any) => {
        if (data.result == 'Los datos no existen') {
          console.log(data.result);
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Usuario no existe',
            showConfirmButton: false,
            timer: 1500
          });
        } else {
          this.userService.logueado = true;
          this.user = data.resulta[0];
          // this.userService.setUserLogging(this.user)
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Logueado correctamente',
            showConfirmButton: false,
            timer: 1500
          });
          this.router.navigateByUrl('/home')
        }
      })
  }
}
