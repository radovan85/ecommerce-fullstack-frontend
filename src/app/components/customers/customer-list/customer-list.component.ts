import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import { Customer } from 'src/app/common/customer';
import { User } from 'src/app/common/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CustomerService } from 'src/app/services/customer.service';
import { UserService } from 'src/app/services/user.service';
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  constructor(private authService: AuthenticationService, private router: Router,
    private customerService: CustomerService, private userService: UserService) {

  }

  customerList: Customer[] = [];
  userList: User[] = [];

  ngOnInit(): void {
    this.listAllUsers();
    this.listAllCustomers();
  }

  listAllUsers() {
    this.userService.collectAllUsers()
      .then((response) => {
        setTimeout(() => this.userList = response.data);
      })
  }

  listAllCustomers() {
    this.customerService.collectAllCustomers()
      .then((response) => {
        $('#listingTable').DataTable().destroy();
        setTimeout(function () {
          $('#listingTable').DataTable();
        }, 5)
        setTimeout(() => {
          this.customerList = response.data;
        })
      })
  }

  deleteCustomer(customerId: any) {
    if (confirm(`Are you sure you want to delete this customer?\nIt will affect al related data!`)) {
      this.customerService.deleteCustomer(customerId)
        .then(() => {
          this.listAllCustomers();
          this.customerService.redirectAllCustomers();
        }, function () {
          alert(`Failed!`)
        })
    }
  }


  /*
  listAllCustomers() {
    var headers = this.authService.getHeaders();
    axios.get(`${this.customerService.getTargetUrl()}allCustomers`, {
      headers
    })
      .then((response) => {
        $('#listingTable').DataTable().destroy();
        setTimeout(function () {
          $('#listingTable').DataTable();
        }, 1)
        setTimeout(() => this.customerList = response.data);
      })
  }
  

  listAllUsers() {
    var headers = this.authService.getHeaders();
    axios.get(`${this.userService.getTargetUrl()}allUsers`, {
      headers
    })
      .then((response) => {
        setTimeout(() => this.userList = response.data);
      })

  }
  */

  redirectCustomerDetails(customerId: any) {
    this.customerService.redirectCustomerDetails(customerId);
  }

}
