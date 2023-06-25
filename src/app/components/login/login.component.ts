import { Component, OnInit } from '@angular/core';
import { AuthenticationRequest } from 'src/app/common/authentication-request';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authRequest:AuthenticationRequest = new AuthenticationRequest;

  constructor(private mainService:MainService,private authService:AuthenticationService) { }

  ngOnInit(): void {
    
  }

  redirectRegister(){
    this.mainService.redirectRegister();
  }

  login(){
    this.authService.setAuthRequest(this.authRequest);
    this.authService.login();
  }
}
