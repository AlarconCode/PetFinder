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

  public currentUrl: string
  public status: boolean
  constructor(public router: Router, private userService: UserService) {
    this.status = false
  }

  goToWelcome() {
    this.router.navigateByUrl('/bienvenida')
  }

  goToLogin() {
    this.router.navigateByUrl('/login')
  }

  estaLogueado(): boolean {
    return this.userService.logueado
  }

  logout() {
    this.userService.logueado = false;
    this.userService.user = null;
    Swal.fire({title:'Te deslogueaste correctamente', confirmButtonColor : '#16697A'});
    this.router.navigateByUrl('/bienvenida')
  }
}





