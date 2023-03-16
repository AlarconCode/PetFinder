import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public status:boolean
  constructor( public router: Router) {
    this.status = false
  }

  goToFilter(toggle:HTMLInputElement) {

    if (toggle.value)
    this.status = !this.status
    console.log(toggle);
    

  }

}
