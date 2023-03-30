import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CardPost } from 'src/app/models/card-post';
import { PostCardService } from 'src/app/shared/post-card.service';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {

  public card: CardPost;
  public postForm: FormGroup;

  constructor(public router: Router, public postCardService: PostCardService, public userService: UserService) {

  }


  //ACTUALIZAR
  editCardPost(id_user) {
    this.card = this.postForm.value;
    id_user=this.userService.getUser().id_user
    this.postCardService.putCardPost(new CardPost(0,id_user,this.card.post_location, this.card.url_post, this.card.description, this.card.post_date, this.card.found))
      .subscribe((data: any) => {
        console.log(data)
        this.postCardService.cards = data.result
      });
  }
}


