import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {

  public urlCurrent:string
  public user:User
  public regForm:FormGroup

  constructor(private router:Router, private userService:UserService, private fb:FormBuilder) {

    this.urlCurrent = this.router.url
    this.buildForm()

  }

  buttonRegister() {

    this.user = this.regForm.value
    this.userService.userRegister(this.user)
    .subscribe((data:any) => {

      console.log(data);
      this.router.navigateByUrl('/home')
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'registrado correctamente',
        showConfirmButton: false,
        timer: 1500
      })

    })
  }

  buttonUpdateRegister() {
    this.router.navigateByUrl('/home')
  }

  private buildForm() {

    this.regForm = this.fb.group({
      user_name: [, Validators.required],
      password: [, [Validators.required, Validators.minLength(8)]],
      email: [, [Validators.required, Validators.email]],
      user_location: [, Validators.required],
      phone: [, Validators.required],
      user_image: []
    })

  }



}
