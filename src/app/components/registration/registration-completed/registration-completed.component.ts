
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../../navbar/navbar.component';

@Component({
  selector: 'app-registration-completed',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './registration-completed.component.html',
  styleUrl: './registration-completed.component.css'
})
export class RegistrationCompletedComponent {

  router = inject(Router);

  redirectHome() {
    this.router.navigate([`home`]);
  }
}
