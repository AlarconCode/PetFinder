import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CardPost } from 'src/app/models/card-post';
import { PostCardService } from 'src/app/shared/post-card.service';
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

}
