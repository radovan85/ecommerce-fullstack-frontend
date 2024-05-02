import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../../../classes/customer';
import { ShippingAddress } from '../../../classes/shipping-address';
import { User } from '../../../classes/user';
import { CustomerService } from '../../../services/customer.service';
import { ShippingAddressService } from '../../../services/shipping-address.service';
import { UserService } from '../../../services/user.service';
import { NavbarComponent } from '../../navbar/navbar.component';

@Component({
  selector: 'app-customer-details',
  standalone: true,
  imports: [NavbarComponent, CommonModule],
  templateUrl: './customer-details.component.html',
  styleUrl: './customer-details.component.css'
})
export class CustomerDetailsComponent implements OnInit {

  private customer: Customer = new Customer;
  private route = inject(ActivatedRoute);
  private customerService = inject(CustomerService);
  private userService = inject(UserService);
  private allUsers: User[] = [];
  private addressService = inject(ShippingAddressService);
  private allAddresses: ShippingAddress[] = [];

  ngOnInit(): void {
    Promise.all([
      this.getCustomerDetails(this.route.snapshot.params[`customerId`]),
      this.listAllUsers(),
      this.listAllAddresses()
    ])
  }

  deleteCustomer(customerId: any) {
    if (confirm(`Are you sure you want to remove this customer?\nIt will affect all related data!`)) {
      this.customerService.deleteCustomer(customerId)

        .then(() => {
          this.customerService.redirectAllCustomers();
        })

        .catch((error) => {
          console.log(error);
          alert(`Failed!`);
        })
    }
  }

  redirectAllCustomers() {
    this.customerService.redirectAllCustomers();
  }

  getCustomerDetails(customerId: any): Promise<any> {
    return new Promise(() => {
      this.customerService.getCustomerDetails(customerId)
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

  listAllUsers(): Promise<any> {
    return new Promise(() => {
      this.userService.collectAllUsers()
        .then((response) => {
          setTimeout(() => {
            this.allUsers = response.data;
          })
        })
    })
  }

  getUserById(userId: any): User {
    var returnValue: User = new User;
    this.allUsers.forEach((user) => {
      if (user.id === userId) {
        returnValue = user;
      }
    })

    return returnValue;
  }

  listAllAddresses(): Promise<any> {
    return new Promise(() => {
      this.addressService.collectAllAddresses()
        .then((response) => {
          setTimeout(() => {
            this.allAddresses = response.data;
          })
        })
    })
  }

  getAddress(addressId: any) {
    var returnValue: ShippingAddress = new ShippingAddress;
    this.allAddresses.forEach((address) => {
      if (address.shippingAddressId === addressId) {
        returnValue = address;
      }
    })

    return returnValue;
  }

  reactivateUser(userId: any) {
    if (confirm(`Are you sure you want to reactivate this user?`)) {
      this.userService.reactivateUser(userId)

        .then((response) => {
          this.customerService.redirectAllCustomers();
        })

        .catch((error) => {
          console.log(error);
          alert(`Failed!`);
        })
    }
  }

  suspendUser(userId: any) {
    if (confirm(`Are you sure you want to suspend this user?`)) {
      this.userService.suspendUser(userId)
        .then(() => {
          this.customerService.redirectAllCustomers();
        })

        .catch((error) => {
          console.log(error);
          alert(`Failed!`);
        })
    }
  }

}
