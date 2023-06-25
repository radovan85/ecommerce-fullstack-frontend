import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/common/customer';
import { Order } from 'src/app/common/order';
import { User } from 'src/app/common/user';
import { CustomerService } from 'src/app/services/customer.service';
import { OrderService } from 'src/app/services/order.service';
import { UserService } from 'src/app/services/user.service';
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orderList: Order[] = [];
  customerList: Customer[] = [];
  userList: User[] = [];

  constructor(private orderService: OrderService, private userService: UserService,
    private customerService: CustomerService) { }

  ngOnInit(): void {
    this.listAllUsers();
    this.listAllCustomers();
    this.listAllOrders();
  }


  listAllOrders() {
    this.orderService.collectAllOrders()
      .then((response) => {
        $(`#listingTable`).DataTable().destroy();
        setTimeout(function () {
          $(`#listingTable`).DataTable();
        }, 5)
        setTimeout(() => this.orderList = response.data);
      })
  }

  listAllCustomers() {
    this.customerService.collectAllCustomers()
      .then((response) => {
        setTimeout(() => this.customerList = response.data);
      })
  }

  listAllUsers() {
    this.userService.collectAllUsers()
      .then((response) => {
        setTimeout(() => this.userList = response.data);
      })
  }

  redirectOrderDetails(orderId:any){
    this.orderService.redirectOrderDetails(orderId);
  }

}
