import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CardPost } from 'src/app/models/card-post';
import { PostCardService } from 'src/app/shared/post-card.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {

  public card: CardPost;
  public postForm: FormGroup;

  constructor(public router: Router, public postCardService: PostCardService) {

  }


  //ACTUALIZAR
  editCardPost() {
    this.card = this.postForm.value;
    this.postCardService.putCardPost(new CardPost(0,0,this.card.imgPet,this.card.imgUser, this.card.userName, this.card.comment, this.card.place, this.card.post_date))
      .subscribe((data: any) => {
        console.log(data)
        this.postCardService.cards = data.result[0]

      });
  }
}


