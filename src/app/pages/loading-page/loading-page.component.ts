import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loading-page',
  templateUrl: './loading-page.component.html',
  styleUrls: ['./loading-page.component.css']
})
export class LoadingPageComponent {

  constructor(public router: Router) {

    // tiempo de la pagina de loading,envía a la pagina de bienvenida
    setTimeout(() => {
      this.router.navigate(['bienvenida']);
    }, 3000);  //5s

  }



}
