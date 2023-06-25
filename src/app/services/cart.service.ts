import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import axios from 'axios';
import { Route, Router } from '@angular/router';

var target_url = `http://localhost:8080/api/cart/`;

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private authService: AuthenticationService,private router:Router) { }

  async addCartItem(productId: any) {
    var headers = this.authService.getHeaders();
    await axios.post(`${target_url}addCartItem/${productId}`, {}, {
      headers
    })
      .then(() => {
        alert(`Product is added to cart!`);
      }, function () {
        alert(`Failed!`);
      })
  }

  collectAllItems(){
    var headers = this.authService.getHeaders();
    return axios.get(`${target_url}listMyItems`, {
      headers
    })
  }

  findMyCart(){
    var headers = this.authService.getHeaders();
    return axios.get(`${target_url}findMyCart`, {
      headers
    })
  }

  redirectCart(){
    this.router.navigate([`cart`]);
  }

  async deleteItem(itemId:any){
    var headers = this.authService.getHeaders();
    return await axios.delete(`${target_url}removeItem/${itemId}`, {
      headers
    })
  }

  async clearCart(){
    var headers = this.authService.getHeaders();
    return await axios.delete(`${target_url}clearCart`, {
      headers
    })
  }

  redirectCheckout(){
    var headers = this.authService.getHeaders();
    return axios.get(`${target_url}checkout`, {
      headers
    })
  }

  redirectCartError(){
    this.router.navigate([`cartError`]);
  }
}
