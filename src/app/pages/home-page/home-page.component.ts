import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';
import { CardPost } from '../../models/card-post';
import { PostCardService } from '../../shared/post-card.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  public cards: CardPost[]
  constructor(private postCardService: PostCardService, private userService: UserService) {
    this.showCardsPosts()
  }

  showCardsPosts() {
    this.postCardService.getCardPosts()
    .subscribe((data:any) => {

     this.cards = data.result
     
    })
  }

  deletePost(id_post:number) {
    
    this.postCardService.deleteCardPost(id_post)
    .subscribe((data:any) => {
      console.log(data.result);
      this.cards = this.cards.filter(card => card.id_post !== id_post)
      
    })
  }

}
