import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CardPost } from 'src/app/models/card-post';
import { PostCardService } from 'src/app/shared/post-card.service';

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.css']
})
export class CardPostComponent {

  public arrCardsExample:CardPost[]
  public card:CardPost
  public currentUrl:string
  public view:boolean
  constructor(private router:Router, public postCardService:PostCardService) {

    this.arrCardsExample = postCardService.cards
    console.log(this.router.url);
    this.currentUrl = this.router.url
    console.log(this.currentUrl);
    
  }

  goToContactForm() {
    this.router.navigateByUrl('contacto')
  }

  changeView(id_cardPost:number) {
    this.view = !this.view
    this.arrCardsExample = this.arrCardsExample.filter(e => e.id_cardPost == id_cardPost )   
  }

  changeBack() {
    this.view = !this.view
    this.arrCardsExample = this.postCardService.cards
  }

  deletePost() {
    confirm('desea borrar la publicación')
  }

}
