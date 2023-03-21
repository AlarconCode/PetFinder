import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { Location } from '@angular/common';



@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent {

  constructor(public router: Router, private location:Location){}

  goBack(){
    this.location.back();
  }


  buttonSendMailContact() {
    
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      },
      color: '#16697A'
    })
    
    Toast.fire({
      icon: 'success',
      title: 'Enviado correctamente'
    })

    this.router.navigateByUrl('/home')

  }
}
