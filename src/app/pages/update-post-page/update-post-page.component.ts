import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-update-post-page',
  templateUrl: './update-post-page.component.html',
  styleUrls: ['./update-post-page.component.css']
})
export class UpdatePostPageComponent {

  constructor(public router: Router, private location:Location){}

  goBack(){
    this.location.back();
  }

}
