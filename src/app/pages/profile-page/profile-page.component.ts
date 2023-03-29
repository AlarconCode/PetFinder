import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent {

  public user:User
  constructor(private router:Router, private userService:UserService) {
    this.user = this.userService.getUser()
  }

  editUserData() {
    this.router.navigateByUrl('/actualizar-registro')
  }

}
