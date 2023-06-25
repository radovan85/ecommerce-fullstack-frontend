import { Component, OnInit } from '@angular/core';
import { BillingAddress } from 'src/app/common/billing-address';
import { Cart } from 'src/app/common/cart';
import { CartItem } from 'src/app/common/cart-item';
import { Product } from 'src/app/common/product';
import { ShippingAddress } from 'src/app/common/shipping-address';
import { CartService } from 'src/app/services/cart.service';
import { MainService } from 'src/app/services/main.service';
import { OrderService } from 'src/app/services/order.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {

  productList:Product [] = [];
  cartItems:CartItem [] = [];
  billingAddress:BillingAddress = new BillingAddress
  shippingAddress:ShippingAddress = new ShippingAddress;
  cart:Cart = new Cart;

  constructor(private orderService:OrderService,private cartService:CartService,
    private productService:ProductService,private mainService:MainService) { }

  ngOnInit(): void {
    this.listAllProducts();
    this.listCartItems();
    this.retrieveBillingAddress();
    this.retrieveShippingAddress();
    this.retrieveCart();
  }
  

  retrieveBillingAddress(){
    this.orderService.retrieveBillingAddress()
    .then((response) => {
      this.billingAddress = response.data;
    })
  }

  retrieveShippingAddress() {
    this.orderService.retrieveShippingAddress()
    .then((response) => {
      this.shippingAddress = response.data;
    })
  }

  retrieveCart(){
    this.cartService.findMyCart()
    .then((response) => {
      this.cart = response.data;
    })
  }

  listCartItems(){
    this.cartService.collectAllItems()
    .then((response) => {
       setTimeout(() => this.cartItems = response.data);
    })
  }

  listAllProducts(){
    this.productService.collectAllProducts()
    .then((response) => {
      setTimeout(() => this.productList = response.data);
    })
  }

  getNumber(value:any){
    return this.mainService.getNumber(value);
  }

  redirectConfirmPhone(){
    this.orderService.redirectConfirmPhone();
  }

  redirectCancelOrder(){
    this.orderService.redirectCancelOrder();
  }

  executeOrder(){
    this.orderService.executeOrder()
    .then(() => {
      this.orderService.redirectOrderCompleted();
    })
    .catch(() => {
      this.orderService.redirectStockError();
    })
  }

}
