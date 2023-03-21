import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import Swal from 'sweetalert2';

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
    if(1==1){
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
