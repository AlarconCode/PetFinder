import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent {
  

  constructor(private router:Router){
    
  } 

  goHome(){
    this.router.navigateByUrl("home")
  }

  goLogin(){
    this.router.navigateByUrl("login")
  }

  goRegister(){
    this.router.navigateByUrl("registro")
  }


}
