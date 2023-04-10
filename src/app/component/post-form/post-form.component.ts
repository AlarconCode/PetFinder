import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CardPost } from 'src/app/models/card-post';
import { User } from 'src/app/models/user';
import { PostCardService } from 'src/app/shared/post-card.service';
import { UserService } from 'src/app/shared/user.service';
import Swal from 'sweetalert2';

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
    this.card = this.postCardService.getUpdatePost()
  }

//Validaciones
  private buildForm() {
    this.postForm= this.fb.group({
      post_location:[, Validators.required],
      post_date: [, [Validators.required]],
      url_post: [, [Validators.required]],
      description: [, [Validators.required]]
    })
  }
   //PUBLICAR
   postCardPost() {
    this.card = this.postForm.value;
    this.postCardService.postCardPost(new CardPost(0,this.userService.user.id_user,this.card.post_location, this.card.url_post, this.card.description, this.card.post_date, this.card.found, this.userService.user.user_name, this.userService.user.user_image, this.userService.user.email))
      .subscribe((data: any) => {
        console.log(data)
        this.postCardService.cards = data.result
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: '¡Publicado correctamente!',
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigateByUrl('/home')
      });
  }
 
 
  //ACTUALIZAR
  editCardPost() {
    this.card = this.postForm.value;
    this.postCardService.getUpdatePost().post_location = this.card.post_location
    this.postCardService.getUpdatePost().post_date = this.card.post_date
    this.postCardService.getUpdatePost().url_post = this.card.url_post
    this.postCardService.getUpdatePost().description = this.card.description

    this.postCardService.putCardPost(this.postCardService.getUpdatePost())
      .subscribe((data: any) => {
        console.log(data)
        this.postCardService.cards = data.result
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: '¡Actualizada correctamente!',
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigateByUrl('/home')
      });
  }
}


