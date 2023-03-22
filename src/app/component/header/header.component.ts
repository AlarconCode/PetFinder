import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public currentUrl:string
  public status:boolean
<<<<<<< HEAD
  constructor( public router: Router, private userService:UserService) 
  {
    this.status = false
=======
  constructor( public router:Router) {
    this.status = false    
>>>>>>> e076bc6754c2be821822bdcff8f0eb09e9106add
  }
  
  goToFilter() {
    this.status = !this.status
  }
  

  goToWelcome() {
    this.router.navigateByUrl('/bienvenida')
  }

  goToLogin(){
    this.router.navigateByUrl('/login')
  }

  estaLogueado(){
    return this.userService.estaLogueado();
  }

  logout(){
    return this.userService.logout();
  }

}



