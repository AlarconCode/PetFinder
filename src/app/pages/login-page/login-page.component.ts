import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import Swal from 'sweetalert2';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  logueado:boolean;
  // user= User;
  // email:string;
  // password:string;
  
 
  constructor(private router: Router, private location:Location)  // private authService:authService
  {
this.logueado = true;
// this.logueado = false;
  }


  goBack(){
    this.location.back();
  }

  login(){
    console.log(this.logueado);
    if(this.logueado == true){
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Logueado correctamente',
        showConfirmButton: false,
        timer: 1500
      });
      this.router.navigateByUrl('/home')
    }else{
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
