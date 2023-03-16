import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-public-profile-page',
  templateUrl: './public-profile-page.component.html',
  styleUrls: ['./public-profile-page.component.css']
})
export class PublicProfilePageComponent {

  constructor(private router:Router) {}
  
  goToContactForm() {
    this.router.navigateByUrl('contacto')
  }

}
