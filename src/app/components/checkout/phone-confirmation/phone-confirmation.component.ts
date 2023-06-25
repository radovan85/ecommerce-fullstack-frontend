import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/common/customer';
import { OrderService } from 'src/app/services/order.service';
import { ValidationService } from 'src/app/services/validation.service';

@Component({
  selector: 'app-phone-confirmation',
  templateUrl: './phone-confirmation.component.html',
  styleUrls: ['./phone-confirmation.component.css']
})
export class PhoneConfirmationComponent implements OnInit {

  customer: Customer = new Customer();

  constructor(private orderService: OrderService, private validationService: ValidationService) { }

  ngOnInit(): void {
    this.getCurrentCustomer();
  }

  getCurrentCustomer() {
    this.orderService.getCurrentCustomer()
      .then((response) => {
        this.customer = response.data;
      })
  }

  validatePhoneNumber() {
    return this.validationService.validatePhoneNumber();
  }

  updateCustomer() {
    if (this.validatePhoneNumber()) {
      this.orderService.setCustomer(this.customer);
      this.orderService.updateCustomer()
        .then(() => {
          this.orderService.redirectConfirmOrder();
        }, function () {
          alert(`Failed`);
        })
    }
  }

  redirectConfirmShipping() {
    this.orderService.redirectConfirmShipping();
  }

  redirectCancelOrder(){
    this.orderService.redirectCancelOrder();
  }

}
