import { Component, OnInit } from '@angular/core';
import { BillingAddress } from 'src/app/common/billing-address';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { OrderService } from 'src/app/services/order.service';
import { ValidationService } from 'src/app/services/validation.service';

@Component({
  selector: 'app-billing-confirmation',
  templateUrl: './billing-confirmation.component.html',
  styleUrls: ['./billing-confirmation.component.css']
})
export class BillingConfirmationComponent implements OnInit {

  billingAddress: BillingAddress = new BillingAddress;

  constructor(private authService: AuthenticationService, private orderService: OrderService,
    private validationService: ValidationService) { }

  ngOnInit(): void {
    this.retrieveBillingAddress()
  }

  retrieveBillingAddress() {
    this.orderService.retrieveBillingAddress()
      .then((response) => {
        this.billingAddress = response.data;
      })
  }

  validateAddress() {
    return this.validationService.validateAddress();
  }

  updateBillingAddress() {
    if (this.validateAddress()) {
      this.orderService.setBillingAddress(this.billingAddress);
      this.orderService.updateBillingAddress()
        .then(() => {
          this.orderService.redirectConfirmShipping();
        }, function () {
          alert(`Failed`);
        })
    }
  }

  redirectCancelOrder(){
    this.orderService.redirectCancelOrder();
  }

}
