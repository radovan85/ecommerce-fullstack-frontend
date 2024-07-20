import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import axios from 'axios';
import { ShippingAddress } from '../../../classes/shipping-address';
import { CartService } from '../../../services/cart.service';
import { OrderService } from '../../../services/order.service';
import { ValidationService } from '../../../services/validation.service';
import { NavbarComponent } from '../../navbar/navbar.component';

@Component({
  selector: 'app-address-confirmation',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './address-confirmation.component.html',
  styleUrl: './address-confirmation.component.css'
})
export class AddressConfirmationComponent implements OnInit, AfterViewInit {

  private currentAddress: ShippingAddress = new ShippingAddress;
  private orderService = inject(OrderService);
  private cartService = inject(CartService);
  private validationService = inject(ValidationService);

  ngOnInit(): void {
    Promise.all([
      this.provideMyAddress()
    ])
  }

  ngAfterViewInit(): void {
    this.executeAddressForm();
  }

  provideMyAddress() {
    this.orderService.provideMyAddress()
      .then((response) => {
        setTimeout(() => {
          this.currentAddress = response.data;
        })
      })
  }

  getCurrentAddress(): ShippingAddress {
    return this.currentAddress;
  }

  redirectCart() {
    this.cartService.redirectCart();
  }

  cancelOrder() {
    this.orderService.cancelOrder();
  }

  executeAddressForm() {
    var targetUrl = `http://localhost:8080/api/order/confirmShippingAddress`;
    var form = document.getElementById(`shippingAddressForm`) as HTMLFormElement;
    form.addEventListener(`submit`, async (event) => {

      event.preventDefault();

      var formData = new FormData(form);
      var serializedData: { [key: string]: string } = {};
      formData.forEach((value, key) => {
        serializedData[key] = value.toString().trim();
      });

      if (this.validationService.validateShippingAddress()) {
        axios.put(`${targetUrl}`, {
          address: serializedData[`address`],
          city: serializedData[`city`],
          state: serializedData[`state`],
          postcode: serializedData[`postcode`],
          country: serializedData[`country`]
        })

          .then(() => {
            this.orderService.redirectPhoneConfirmation();
          })

          .catch((error) => {
            console.log(error);
            alert(`Failed`);
          })
      }
    })
  }



}
