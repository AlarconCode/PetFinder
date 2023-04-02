import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CardPost } from '../../models/card-post';
import { PostCardService } from '../../shared/post-card.service';
import Swal from 'sweetalert2'
import { UserService } from 'src/app/shared/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.css']
})
export class CardPostComponent {

  public card:CardPost
  public currentUrl:string
  public view:boolean
  public logging:boolean
  public id_userLogging:number

  @Input() post :CardPost
  @Output() id_post = new EventEmitter<number>
  @Output() change_view = new EventEmitter<number>
  @Output() close_view = new EventEmitter<boolean>


  constructor(private router:Router, public postCardService:PostCardService, public userService:UserService) {

    this.currentUrl = this.router.url
    this.logging = this.userService.logueado 
    if (this.userService.user !== null) {
      this.id_userLogging = this.userService.user.id_user    
    }
      
  }

  getIdPostToDelete(value:number){
    this.id_post.emit(value)
  }

  getIdPostToChangeView(value:number) {
    this.change_view.emit(value)
    this.view = !this.view 
  }
  
  closeBigCard(value:boolean) {
    this.close_view.emit(value)
    this.view = !this.view
  }

  goToContactForm() {
    this.router.navigateByUrl('contacto')
  }


  editPost() {
    this.router.navigateByUrl('/actualizar-publicacion')
  }

  
}
  
