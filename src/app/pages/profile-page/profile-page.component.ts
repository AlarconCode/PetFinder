import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CardPost } from 'src/app/models/card-post';
import { User } from 'src/app/models/user';
import { PostCardService } from 'src/app/shared/post-card.service';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent {

  public cardsUser: CardPost[]
  public user:User
  constructor(private router:Router, private userService:UserService, public postCardService:PostCardService) {
    this.user = this.userService.getUser()
    this.showCardsByIdUser()
  }

  showCardsByIdUser() {
    this.postCardService.getCardPostsByIdUser(this.user.id_user)
    .subscribe((data:any) => {
      this.cardsUser = data.result
    })

  }

  
  deletePost(id_post:number) {
    console.log(id_post);
    
    this.postCardService.deleteCardPost(id_post)
    .subscribe((data:any) => {
      console.log(data.result);
      this.cardsUser = this.cardsUser.filter(card => card.id_post !== id_post)
      
    })
  }

  editUserData() {
    this.router.navigateByUrl('/actualizar-registro')
  }

}
