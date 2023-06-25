import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/common/order';
import { OrderAddress } from 'src/app/common/order-address';
import { OrderItem } from 'src/app/common/order-item';
import { MainService } from 'src/app/services/main.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  address: OrderAddress = new OrderAddress;
  order: Order = new Order;
  orderedItems: OrderItem[] = [];
  orderPrice = ``;

  constructor(private route: ActivatedRoute, private orderService: OrderService,
    private mainService: MainService) {
  }

  ngOnInit(): void {
    var orderId = this.route.snapshot.params[`orderId`];
    this.getOrderDetails(orderId);
    this.getOrderedItems(orderId);
    this.getAddressDetails(orderId);
    this.listOrderTotal(orderId);
  }

  getOrderDetails(tempOrderId: any) {
    this.orderService.getOrderDetails(tempOrderId)
      .then((response) => {
        this.order = response.data;
      })
  }

  getOrderedItems(tempOrderId: any) {
    this.orderService.getOrderedItems(tempOrderId)
      .then((response) => {
        setTimeout(() => this.orderedItems = response.data);
      })
  }

  getAddressDetails(tempOrderId: any) {
    this.orderService.getOrderAddressDetails(tempOrderId)
      .then((response) => {
        this.address = response.data;
      })
  }

  listOrderTotal(tempOrderId: any) {
    this.orderService.getOrderTotal(tempOrderId)
      .then((response) => {
        this.orderPrice = response.data;
      })
  }

  deleteOrder(tempOrderId: any) {
    if (confirm(`Remove this order?`)) {
      this.orderService.deleteOrder(tempOrderId)
        .then(() => {
          this.orderService.collectAllOrders();
          this.redirectAllOrders();
        }, function () {
          alert(`Failed`);
        })
    }
  }

  getNumber(value: any) {
    return this.mainService.getNumber(value);
  }

  redirectAllOrders() {
    this.orderService.redirectAllOrders();
  }

}
