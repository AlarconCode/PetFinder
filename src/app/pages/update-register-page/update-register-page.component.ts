import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-update-register-page',
  templateUrl: './update-register-page.component.html',
  styleUrls: ['./update-register-page.component.css']
})
export class UpdateRegisterPageComponent {

  constructor(public router: Router, private location:Location){}

  goBack(){
    this.location.back();
  }

}
