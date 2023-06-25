import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';
import { Customer } from 'src/app/common/customer';
import { User } from 'src/app/common/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CustomerService } from 'src/app/services/customer.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  tempCustomer: Customer = new Customer;
  userList: User[] = [];

  constructor(private authService: AuthenticationService, private customerService: CustomerService,
    private router: Router, private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.listAllUsers();
    this.getCustomerById(this.route.snapshot.params["customerId"]);
  }

  getCustomerById(customerId: any) {
    var headers = this.authService.getHeaders();
    axios.get(`${this.customerService.getTargetUrl()}customerDetails/${customerId}`, {
      headers
    })
      .then((response) => {
        this.tempCustomer = response.data;
      })
  }

  listAllUsers() {
    this.userService.collectAllUsers()
      .then((response) => {
        setTimeout(() => this.userList = response.data);
      })
  }

  suspendUser(userId: any) {
    if (confirm(`Are you sure you want to suspend this user?`)) {
      this.userService.suspendUser(userId)
        .then(() => {
          this.customerService.redirectAllCustomers()
        }, function () {
          alert(`Failed`);
        })
    }
  }

  reactivateUser(userId: any) {
    if (confirm(`Are you sure you want to reactivate this user`)) {
      this.userService.reactivateUser(userId)
        .then(() => {
          this.customerService.redirectAllCustomers();
        }, function () {
          alert(`Failed`);
        })
    }
  }

  redirectAllCustomers() {
    this.customerService.redirectAllCustomers();
  }

  deleteCustomer(customerId: any) {
    if (confirm(`Are you sure you want to delete this customer?\nIt will affect all related data?`)) {
      this.customerService.deleteCustomer(customerId)
        .then(() => {
          this.customerService.collectAllCustomers();
          this.customerService.redirectAllCustomers();
        }, function () {
          alert(`Failed`);
        })
    }
  }
}
