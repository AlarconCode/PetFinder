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

  public user: User;
  public cards: CardPost[]

  constructor(public postCardService: PostCardService, private userService: UserService) {
    this.cards = postCardService.cards;
    // this.user = userService.user;
  }

  showAllCardPosts() {
    this.postCardService.getCardPosts()
      .subscribe((data: any) => {
        this.cards.push(data.result[0])
      })
  }

  showCardPostsFromUser(id_user: number) {
    id_user = this.userService.user.id_user
    if (this.userService.logueado == true) {
      this.postCardService.getCardsFromUser(id_user)
        .subscribe((data: any) => {
          this.cards.push(data.result[0])
        })
    }


  }
}




