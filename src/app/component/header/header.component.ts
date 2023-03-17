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
  
  async goToFilter() {
    
    this.status = !this.status
    const { value } = await Swal.fire({
      title: 'Seleccione Provincia',
      input: 'select',
      inputOptions: {
        'Castilla la Mancha': {
          1: 'Toledo',
          2: 'Cuenca',
          3: 'Albacete',
          4: 'Ciudad Real',
          5: 'Guadalajara'
        },
        'Madrid': {
          1: 'Madrid'
        },
        'Andalucía': {
          1: 'Sevilla',
          2: 'Granada',
          3: 'Malaga',
          4: 'Cadiz',
          5: 'Córdoba',
          6: 'Huelva',
          7: 'Almería',
          8: 'Jaén'
        }
      },
      inputPlaceholder: 'Seleccione provincia',
      showCancelButton: true,
    })

  }

}
