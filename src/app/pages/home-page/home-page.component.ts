import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  constructor(private router:Router) {


  }

  goToContactForm() {
    this.router.navigateByUrl('contacto')
  }

  goToPublicProfile() {
    this.router.navigateByUrl('perfil-publico')
  }

}
