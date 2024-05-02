import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationRequest } from '../../classes/authentication-request';
import { AuthService } from '../../services/auth.service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NavbarComponent, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  private authRequest: AuthenticationRequest = new AuthenticationRequest;
  private authService = inject(AuthService);

  login() {
    this.authService.setAuthRequest(this.authRequest);
    this.authService.login();
  }

  public getAuthRequest(): AuthenticationRequest {
    return this.authRequest;
  }

  redirectRegister() {
    this.authService.redirectRegister();
  }


}
