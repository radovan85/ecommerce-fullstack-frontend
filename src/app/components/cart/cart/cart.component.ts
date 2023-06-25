import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/common/cart';
import { CartItem } from 'src/app/common/cart-item';
import { Product } from 'src/app/common/product';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CartService } from 'src/app/services/cart.service';
import { MainService } from 'src/app/services/main.service';
import { OrderService } from 'src/app/services/order.service';
import { ProductService } from 'src/app/services/product.service';
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: Cart = new Cart;
  cartItems: CartItem[] = [];
  productList: Product[] = [];

  constructor(private authService: AuthenticationService, private cartService: CartService,
    private productService: ProductService, private mainService: MainService,
    private orderService:OrderService) { }

  ngOnInit(): void {
    this.listAllProducts();
    this.findMyCart();
    this.listAllItems();
  }

  listAllItems() {
    this.cartService.collectAllItems()
      .then((response) => {
        $(`#listingTable`).DataTable().destroy();
        setTimeout(function () {
          $(`#listingTable`).DataTable();
        }, 5)
        setTimeout(() => this.cartItems = response.data);
      })
  }

  findMyCart() {
    this.cartService.findMyCart()
      .then((response) => {
        this.cart = response.data;
      })
  }

  listAllProducts() {
    this.productService.collectAllProducts()
      .then((response) => {
        setTimeout(() => this.productList = response.data);
      })
  }

  deleteItem(itemId: any) {
    if (confirm(`Remove this item?`)) {
      this.cartService.deleteItem(itemId)
        .then(() => {
          this.findMyCart();
          this.listAllItems();
          this.cartService.redirectCart();
        }, function () {
          alert(`Failed!`);
        })
    }
  }

  clearCart() {
    if (confirm(`Are you sure you want to clear cart?`)) {
      this.cartService.clearCart()
        .then(() => {
          this.findMyCart();
          this.listAllItems();
          this.cartService.redirectCart();
        }, function () {
          alert(`Failed!`);
        })
    }
  }

  getNumber(value: any) {
    return this.mainService.getNumber(value);
  }

  redirectCheckout(){
    this.cartService.redirectCheckout()
    .then(() => {
      this.orderService.redirectConfirmBilling();
    })
    .catch(() => {
      this.cartService.redirectCartError();
    })
  }

}
