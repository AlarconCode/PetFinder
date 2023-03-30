import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CardPost } from 'src/app/models/card-post';
import { User } from 'src/app/models/user';
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
  public user: User;

  constructor(public router: Router, public postCardService: PostCardService, public userService: UserService, private fb:FormBuilder) {
    this.buildForm()
  }

//Validaciones
  private buildForm() {
    this.postForm= this.fb.group({
      post_date: [, [Validators.required]],
      url_post: [, [Validators.required]],
      description: [, [Validators.required]]
    })
  }
   //PUBLICAR
   postCardPost(id_user) {
    this.card = this.postForm.value;
    id_user=this.userService.user.id_user
    this.postCardService.postCardPost(new CardPost(0,id_user,this.card.post_location, this.card.url_post, this.card.description, this.card.post_date, this.card.found))
      .subscribe((data: any) => {
        console.log(data)
        this.postCardService.cards = data.result
      });
  }
 
  //ACTUALIZAR
  editCardPost(id_user) {
    this.card = this.postForm.value;
    id_user=this.userService.user.id_user
    this.postCardService.putCardPost(new CardPost(0,id_user,this.card.post_location, this.card.url_post, this.card.description, this.card.post_date, this.card.found))
      .subscribe((data: any) => {
        console.log(data)
        this.postCardService.cards = data.result
      });
  }
}


