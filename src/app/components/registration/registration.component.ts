import { Component, OnInit } from '@angular/core';
import { RegistrationForm } from 'src/app/common/registration-form';
import { CustomerService } from 'src/app/services/customer.service';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  form: RegistrationForm = new RegistrationForm;

  constructor(private mainService: MainService, private customerService: CustomerService) { }

  ngOnInit(): void {
  }

  redirectLogin() {
    this.mainService.redirectLogin();
  }

  addCustomer() {
    this.customerService.setForm(this.form);
    this.customerService.addCustomer();
  }

}
