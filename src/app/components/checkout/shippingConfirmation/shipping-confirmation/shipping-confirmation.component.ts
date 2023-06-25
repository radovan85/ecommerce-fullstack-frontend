import { Component, OnInit } from '@angular/core';
import { ShippingAddress } from 'src/app/common/shipping-address';
import { OrderService } from 'src/app/services/order.service';
import { ValidationService } from 'src/app/services/validation.service';

@Component({
  selector: 'app-shipping-confirmation',
  templateUrl: './shipping-confirmation.component.html',
  styleUrls: ['./shipping-confirmation.component.css']
})
export class ShippingConfirmationComponent implements OnInit {

  shippingAddress: ShippingAddress = new ShippingAddress;

  constructor(private orderService: OrderService, private validationService: ValidationService) { }

  ngOnInit(): void {
    this.retrieveShippingAddress();
  }

  retrieveShippingAddress() {
    this.orderService.retrieveShippingAddress()
      .then((response) => {
        this.shippingAddress = response.data
      })
  }

  validateAddress() {
    return this.validationService.validateAddress();
  }

  updateShippingAddress() {
    if (this.validateAddress()) {
      this.orderService.setShippingAddress(this.shippingAddress);
      this.orderService.updateShippingAddress()
        .then(() => {
          this.redirectConfirmPhone();
        }, function () {
          alert(`Failed`);
        })
    }
  }

  redirectConfirmBilling() {
    this.orderService.redirectConfirmBilling();
  }

  redirectConfirmPhone() {
    this.orderService.redirectConfirmPhone();
  }

  redirectCancelOrder(){
    this.orderService.redirectCancelOrder();
  }

}
