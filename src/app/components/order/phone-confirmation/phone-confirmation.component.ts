import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import axios from 'axios';
import { Customer } from '../../../classes/customer';
import { CustomerService } from '../../../services/customer.service';
import { OrderService } from '../../../services/order.service';
import { ValidationService } from '../../../services/validation.service';
import { NavbarComponent } from '../../navbar/navbar.component';

@Component({
  selector: 'app-phone-confirmation',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './phone-confirmation.component.html',
  styleUrl: './phone-confirmation.component.css'
})
export class PhoneConfirmationComponent implements OnInit, AfterViewInit {

  private orderService = inject(OrderService);
  private customerService = inject(CustomerService);
  private customer: Customer = new Customer;
  private validationService = inject(ValidationService);

  ngOnInit(): void {
    this.getCurrentCustomer();
  }

  ngAfterViewInit(): void {
    this.executeCustomerForm();
  }

  redirectAddressConfirmation() {
    this.orderService.redirectAddressConfirm();
  }

  getCurrentCustomer(): Promise<any> {
    return new Promise(() => {
      this.customerService.getCurrentCustomer()
        .then((response) => {
          setTimeout(() => {
            this.customer = response.data;
          })
        })
    })
  }

  getCustomer(): Customer {
    return this.customer;
  }

  cancelOrder() {
    this.orderService.cancelOrder();
  }

  executeCustomerForm() {
    var form = document.getElementById(`customerForm`) as HTMLFormElement;
    var targetUrl = `http://localhost:8080/api/customers/updateCustomer`;
    form.addEventListener(`submit`, async (event) => {
      event.preventDefault();

      var formData = new FormData(form);
      var serializedData: { [key: string]: string } = {};
      formData.forEach((value, key) => {
        serializedData[key] = value.toString().trim();
      });

      if (this.validationService.validateCustomerPhone()) {
        axios.put(`${targetUrl}`, {
          customerPhone: serializedData[`customerPhone`]
        })

          .then(() => {
            this.orderService.redirectOrderConfirmation();
          })

          .catch((error) => {
            console.log(error);
            alert(`Failed!`);
          })
      }

    })
  }

}
