import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { Location } from '@angular/common';
import { UserService } from 'src/app/shared/user.service';
import { EmailService } from 'src/app/shared/email.service';
import { Email } from 'src/app/models/email';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostCardService } from 'src/app/shared/post-card.service';



@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent {

  // public email:Email
  public contactForm:FormGroup
  constructor(public router: Router, private location:Location, private postCardService: PostCardService, private emailService: EmailService, private fb:FormBuilder){

    this.buildForm()

  }



  private buildForm() {

    this.contactForm = this.fb.group({
      name: [, Validators.required],
      email: [, [Validators.required, Validators.email]],
      phone: [],
      comments: []
    })

  }

  goBack(){
    this.location.back();
  }



  buttonSendMailContact() {

    const email = new Email(
      this.contactForm.value.name,
      this.contactForm.value.email,
      this.contactForm.value.phone,
      this.contactForm.value.comments,
      this.postCardService.emailUser,
      this.postCardService.userName
    )
    console.log(email);
    
    console.log(this.contactForm.value);
    this.emailService.mailer(email).subscribe((data:any) => {
        console.log(data);
        
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

       })

    this.router.navigateByUrl('/home')

  }

}
