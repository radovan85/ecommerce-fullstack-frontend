import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';
import axios from 'axios';
import { BillingAddress } from '../common/billing-address';
import { ShippingAddress } from '../common/shipping-address';
import { Customer } from '../common/customer';

var target_url = `http://localhost:8080/api/order/`;

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  billingAddress: BillingAddress = new BillingAddress;
  shippingAddress: ShippingAddress = new ShippingAddress;
  customer: Customer = new Customer;

  constructor(private authService: AuthenticationService, private router: Router) { }

  redirectConfirmBilling() {
    this.router.navigate([`order/confirmBilling`]);
  }

  redirectConfirmShipping() {
    this.router.navigate([`order/confirmShipping`]);
  }

  redirectConfirmPhone() {
    this.router.navigate([`order/confirmPhone`]);
  }

  redirectConfirmOrder() {
    this.router.navigate([`order/confirmOrder`]);
  }

  redirectCancelOrder() {
    this.router.navigate([`order/cancel`]);
  }

  redirectOrderCompleted() {
    this.router.navigate([`order/orderCompleted`]);
  }

  redirectStockError() {
    this.router.navigate([`order/stockError`]);
  }

  redirectAllOrders() {
    this.router.navigate([`order/allOrders`]);
  }

  redirectOrderDetails(orderId: any) {
    this.router.navigate([`order/orderDetails/${orderId}`]);
  }

  retrieveBillingAddress() {
    var headers = this.authService.getHeaders();
    return axios.get(`${target_url}confirmBilling`, {
      headers
    })
  }

  retrieveShippingAddress() {
    var headers = this.authService.getHeaders();
    return axios.get(`${target_url}confirmShipping`, {
      headers
    })
  }

  getCurrentCustomer() {
    var headers = this.authService.getHeaders();
    return axios.get(`${target_url}currentCustomer`, {
      headers
    })
  }



  async updateBillingAddress() {
    var headers = this.authService.getHeaders();
    return await axios.put(`${target_url}updateBilling/${this.billingAddress.billingAddressId}`, {

      address: this.billingAddress.address,
      city: this.billingAddress.city,
      state: this.billingAddress.state,
      postcode: this.billingAddress.postcode,
      country: this.billingAddress.country
    }, {
      headers
    })
  }

  async updateShippingAddress() {
    var headers = this.authService.getHeaders();
    return await axios.put(`${target_url}updateShipping/${this.shippingAddress.shippingAddressId}`, {

      address: this.shippingAddress.address,
      city: this.shippingAddress.city,
      state: this.shippingAddress.state,
      postcode: this.shippingAddress.postcode,
      country: this.shippingAddress.country
    }, {
      headers
    })
  }

  async updateCustomer() {
    var headers = this.authService.getHeaders();
    return await axios.put(`${target_url}updateCustomer/${this.customer.customerId}`, {

      customerPhone: this.customer.customerPhone,
      shippingAddressId: this.customer.shippingAddressId,
      billingAddressId: this.customer.billingAddressId,
      userId: this.customer.userId,
      cartId: this.customer.cartId
    }, {
      headers
    })
  }

  async executeOrder() {
    var headers = this.authService.getHeaders();
    return await axios.post(`${target_url}executeOrder`, {}, {
      headers
    })
  }

  collectAllOrders() {
    var headers = this.authService.getHeaders();
    return axios.get(`${target_url}allOrders`, {
      headers
    })
  }

  getOrderDetails(orderId: any) {
    var headers = this.authService.getHeaders();
    return axios.get(`${target_url}orderDetails/${orderId}`, {
      headers
    })
  }

  getOrderAddressDetails(orderId: any) {
    var headers = this.authService.getHeaders();
    return axios.get(`${target_url}orderAddressDetails/${orderId}`, {
      headers
    })
  }

  getOrderedItems(orderId: any) {
    var headers = this.authService.getHeaders();
    return axios.get(`${target_url}orderedItems/${orderId}`, {
      headers
    })
  }

  getOrderTotal(orderId: any) {
    var headers = this.authService.getHeaders();
    return axios.get(`${target_url}orderPrice/${orderId}`, {
      headers
    })
  }

  async deleteOrder(orderId: any) {
    var headers = this.authService.getHeaders();
    return await axios.delete(`${target_url}deleteOrder/${orderId}`, {
      headers
    })
  }

  setBillingAddress(billingAddress: BillingAddress) {
    this.billingAddress = billingAddress;
  }

  setShippingAddress(shippingAddress: ShippingAddress) {
    this.shippingAddress = shippingAddress;
  }

  setCustomer(customer: Customer) {
    this.customer = customer;
  }



}
