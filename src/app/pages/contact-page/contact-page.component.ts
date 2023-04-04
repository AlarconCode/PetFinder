import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'src/app/shared/message.service';



@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent {

  public contactForm: FormGroup;

  constructor(public router: Router, private location: Location, private fb: FormBuilder, public _MessageService:MessageService) {
    this.buildForm()
  }

  
  //Funcion para ir atras, boton
  goBack() {
    this.location.back();
  }

  //Validaciones
  private buildForm() {

    this.contactForm = this.fb.group({
      contact_name: [, Validators.required],
      contact_email: [, [Validators.required, Validators.email]],
      contact_phone: [, Validators.required],
      contact_message: [, Validators.required]
    })
  }

  //send email
  public contactFormm(contactForm){
    contactForm=this.contactForm.value
    this._MessageService.sendMessage(contactForm).subscribe(() => {
      Swal.fire("Formulario de contacto", "Mensaje enviado correctamente", "success");
      });
      }

  //yo creo que la function de arriba (contactFrom) deberia de ir metida dentro de buttonsenmailcontact

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
