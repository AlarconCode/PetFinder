import { Component } from '@angular/core';
import { CardPost } from '../../models/card-post';
import { PostCardService } from '../../shared/post-card.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  public cards: CardPost[]
  public status:Boolean
  constructor(private postCardService: PostCardService) {
    this.showCardsPosts()
    this.status = false
  }
  
  onSelected(value:string) :void {
    this.cards = this.cards.filter(card => card.post_location === value)
    this.status = !this.status
  }
  
  filterByUser(value:string) {
    this.cards = this.cards.filter(card => card.user_name === value)
    this.status = !this.status
  }
  
  cleanFilter() {
    this.showCardsPosts()
    this.status = !this.status
  }

  goToFilter() {
    this.status = !this.status
  }

  showCardsPosts() {
    this.postCardService.getCardPosts()
    .subscribe((data:any) => {
     console.log(data.result)
      
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




