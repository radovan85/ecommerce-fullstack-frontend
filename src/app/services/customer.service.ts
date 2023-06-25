import { Injectable, OnInit } from '@angular/core';
import { RegistrationForm } from '../common/registration-form';
import { ValidationService } from './validation.service';
import axios from 'axios';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

var target_url = `http://localhost:8080/api/customers/`;

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  form: RegistrationForm = new RegistrationForm;

  constructor(private validationService: ValidationService, private customerService: CustomerService,
    private router: Router, private authService: AuthenticationService) {
  }

  collectAllCustomers() {
    var headers = this.authService.getHeaders();
    return axios.get(`${target_url}allCustomers`, {
      headers
    })
  }

  async addCustomer() {
    if (this.validationService.validateRegForm()) {
      await axios.post(`http://localhost:8080/api/register`, {
        firstName: this.form.firstName,
        lastName: this.form.lastName,
        email: this.form.email,
        password: this.form.password,
        billingAddress: this.form.billingAddress,
        billingCity: this.form.billingCity,
        billingState: this.form.billingState,
        billingPostcode: this.form.billingPostcode,
        billingCountry: this.form.billingCountry,
        shippingAddress: this.form.shippingAddress,
        shippingCity: this.form.shippingCity,
        shippingState: this.form.shippingState,
        shippingPostcode: this.form.shippingPostcode,
        shippingCountry: this.form.shippingCountry,
        customerPhone: this.form.customerPhone
      })
        .then(() => {
          this.router.navigate([`registrationCompleted`]);
        }, function () {
          alert(`Email exists already`);
        })
    }
  }

  redirectCustomerDetails(customerId: any) {
    this.router.navigate([`customers/customerDetails/${customerId}`]);
  }

  redirectAllCustomers() {
    this.router.navigate([`customers`]);
  }

  getTargetUrl() {
    return target_url;
  }

  setForm(tempForm: RegistrationForm) {
    this.form = tempForm;
  }

  async deleteCustomer(customerId: any) {
    var headers = this.authService.getHeaders();
    return await axios.delete(`${target_url}deleteCustomer/${customerId}`, {
      headers
    })
  }

}
