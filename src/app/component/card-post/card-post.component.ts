import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.css']
})
export class CardPostComponent {

  constructor(private router:Router) {

  }

  goToContactForm() {
    this.router.navigateByUrl('contacto')
  }

}
