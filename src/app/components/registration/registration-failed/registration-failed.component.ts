import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../../navbar/navbar.component';

@Component({
  selector: 'app-registration-failed',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './registration-failed.component.html',
  styleUrl: './registration-failed.component.css'
})
export class RegistrationFailedComponent {

  router = inject(Router);

  redirectHome() {
    this.router.navigate([`home`]);
  }

  redirectRegister() {
    this.router.navigate([`registration`]);
  }
}
