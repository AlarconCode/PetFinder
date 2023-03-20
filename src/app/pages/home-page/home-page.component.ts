import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CardPost } from 'src/app/models/card-post';
import { PostCardService } from 'src/app/shared/post-card.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  public arrCardsExample:CardPost[]
  constructor(public postCardService:PostCardService) {

    this.arrCardsExample = postCardService.getPostCardsExample()


  }

}
