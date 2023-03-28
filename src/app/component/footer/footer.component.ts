import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

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

}
