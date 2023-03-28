import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent {

  public user_image:string
  constructor(private router:Router, private userService:UserService) {
    this.user_image = this.userService.getUser().user_image
  }

  editUserData() {
    this.router.navigateByUrl('/actualizar-registro')
  }

}
