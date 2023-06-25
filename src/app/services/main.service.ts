import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private router:Router) {
   }

   redirectLogin(){
    this.router.navigate([`login`]);
   }

   redirectHome(){
    this.router.navigate([`home`]);
   }

   redirectRegister(){
    this.router.navigate([`register`]);
   }

   redirectAdmin(){
    this.router.navigate([`admin`]);
   }

   getNumber(value: any) {
    var returnValue = Number(value).toFixed(2);
    return returnValue;
  }

  redirectAbout(){
    this.router.navigate([`about`]);
  }
}
