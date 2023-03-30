import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CardPost } from '../../models/card-post';
import { PostCardService } from '../../shared/post-card.service';
import Swal from 'sweetalert2'

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
  public found:boolean
  public elementFound:CardPost
  public viewHeaderPost:boolean
  constructor(private router:Router, public postCardService:PostCardService) {

    this.arrCardsExample = postCardService.cards
    this.currentUrl = this.router.url
    this.viewHeaderPost = true
    
  }

  goToContactForm() {
    this.router.navigateByUrl('contacto')
  }

  changeView(id_cardPost:number) {
    this.view = !this.view
    this.arrCardsExample = this.arrCardsExample.filter(e => e.id_post == id_cardPost )   
  }

  closeBigCard() {
    this.view = !this.view
    this.arrCardsExample = this.postCardService.cards
  }

  deletePost() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: '¿Estas Seguro?',
      text: "No se podrá deshacer",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, ¡Eliminarlo!',
      cancelButtonText: 'No, ¡Cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          '¡Eliminado!',
          'Tu post ha sido eliminado',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'Tu post sigue publicado',
          'error'
        )
      }
    })
  }

  editPost() {
    this.router.navigateByUrl('/actualizar-publicacion')
  }

  checkFoundPost(id_cardPost:number) {
    
    Swal.fire({
      title: '¿Quieres marcarlo como encontrado?',
      showDenyButton: true,
      confirmButtonText: 'Si',
      denyButtonText: `No`,
      confirmButtonColor : '#16697A',
      denyButtonColor: '#FFA62B'
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire({
          title: 'No hay cambios',
          icon: 'success',
          confirmButtonColor : '#16697A'
        })
        this.elementFound = this.arrCardsExample.find(e => e.id_post === id_cardPost)
        this.elementFound.id_post === id_cardPost ? this.found = true : this.found = false
        
      } else if (result.isDenied) {
        Swal.fire({
          title: 'No hay cambios',
          icon: 'info',
          confirmButtonColor : '#16697A'
        })
        this.found = false
      }
    })
  }

}
