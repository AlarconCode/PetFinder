import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public currentUrl:string
  public status:boolean
  constructor( public router:Router) {
    this.status = false    
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

}



