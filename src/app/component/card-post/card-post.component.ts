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
  public found:boolean
  public elementFound:CardPost
  public viewHeaderPost:boolean
  public user:User

  @Input() post :CardPost
  @Output() id_post = new EventEmitter<number>

  constructor(private router:Router, public postCardService:PostCardService, public userService:UserService) {

    this.currentUrl = this.router.url
    this.viewHeaderPost = true    
    
  }

  getIdPostToDelete(value:number){
    this.id_post.emit(value)
  } 
    

  goToContactForm() {
    this.router.navigateByUrl('contacto')
  }

  changeView() {
    this.view = !this.view
  }

  closeBigCard() {
    this.view = !this.view
  }

  

  editPost() {
    this.router.navigateByUrl('/actualizar-publicacion')
  }

  // checkFoundPost(id_cardPost:number) {
    
  //   Swal.fire({
  //     title: '¿Quieres marcarlo como encontrado?',
  //     showDenyButton: true,
  //     confirmButtonText: 'Si',
  //     denyButtonText: `No`,
  //     confirmButtonColor : '#16697A',
  //     denyButtonColor: '#FFA62B'
  //   }).then((result) => {
  //     /* Read more about isConfirmed, isDenied below */
  //     if (result.isConfirmed) {
  //       Swal.fire({
  //         title: 'No hay cambios',
  //         icon: 'success',
  //         confirmButtonColor : '#16697A'
  //       })
  //       this.elementFound = this.arrCardsExample.find(e => e.id_cardPost === id_cardPost)
  //       this.elementFound.id_cardPost === id_cardPost ? this.found = true : this.found = false
        
  //     } else if (result.isDenied) {
  //       Swal.fire({
  //         title: 'No hay cambios',
  //         icon: 'info',
  //         confirmButtonColor : '#16697A'
  //       })
  //       this.found = false
  //     }
  //   })
  // }
  

}
