import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { UserService } from 'src/app/shared/user.service';


@Component({
  selector: 'app-update-register-page',
  templateUrl: './update-register-page.component.html',
  styleUrls: ['./update-register-page.component.css']
})
export class UpdateRegisterPageComponent {

  constructor(public router: Router, private location:Location, private userService:UserService){}

  goBack(){
    if (this.userService.logueado) {
      this.router.navigateByUrl('/mi-perfil')
    } else {
      this.router.navigateByUrl('/home')
    }
    
  }

}
