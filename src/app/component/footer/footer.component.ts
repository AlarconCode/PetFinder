import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';
// 
import Swal from 'sweetalert2';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {


  constructor( public router: Router, private userService: UserService) {}

  goToProfile() {
    if (this.userService.logueado) {
      this.router.navigateByUrl('/mi-perfil')
    } else {
      this.router.navigateByUrl('/registro')
    }
  }

  goToPostForm(){
    if (this.userService.logueado) {
      this.router.navigateByUrl('/publicar')
    } else {
      this.router.navigateByUrl('/registro')
      // 
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'Tienes que registrate para publicar',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }

}
