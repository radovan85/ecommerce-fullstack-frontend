import { DomElementSchemaRegistry } from '@angular/compiler';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import { ProductImage } from '../classes/product-image';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private router = inject(Router);
  private targetUrl = `http://localhost:8080/api/products/`;

  redirectAllProducts() {
    this.router.navigate([`products`]);
  }

  redirectAddProduct() {
    this.router.navigate([`products/addProduct`]);
  }

  redirectProductDetails(productId: any) {
    this.router.navigate([`products/productDetails/${productId}`]);
  }

  redirectUpdateProduct(productId: any) {
    this.router.navigate([`products/updateProduct/${productId}`]);
  }

  collectAllProducts() {
    return axios.get(`${this.targetUrl}allProducts`);
  }

  getProductDetails(productId: any) {
    return axios.get(`${this.targetUrl}productDetails/${productId}`);
  }

  async deleteProduct(productId: any) {
    return await axios.delete(`${this.targetUrl}deleteProduct/${productId}`);
  }

  redirectAddImage(productId: any) {
    this.router.navigate([`products/addImage/${productId}`]);
  }

  collectAllImages() {
    return axios.get(`${this.targetUrl}allImages`);
  }

}
