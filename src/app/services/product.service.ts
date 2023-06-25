import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';
import axios from 'axios';
import { ValidationService } from './validation.service';
import { Product } from '../common/product';
import { MainService } from './main.service';

var target_url = `http://localhost:8080/api/products/`;

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  product: Product = new Product

  constructor(private authService: AuthenticationService, private router: Router,
    private validationService: ValidationService) { }

  collectAllProducts() {
    var headers = this.authService.getHeaders();
    return axios.get(`${target_url}allProducts`, {
      headers
    })
  }

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

  async deleteProduct(productId: any) {
    var headers = this.authService.getHeaders();
    return await axios.delete(`${target_url}deleteProduct/${productId}`, {
      headers
    })
  }

  getProduct(productId: any) {
    var headers = this.authService.getHeaders();
    return axios.get(`${target_url}productDetails/${productId}`, {
      headers
    });
  }

  validateProduct() {
    return this.validationService.validateProduct();
  }

  async addProduct() {
    var headers = this.authService.getHeaders();
    if (this.validateProduct()) {
      await
        axios.post(`${target_url}storeProduct`, {
          productDescription: this.product.productDescription,
          productStatus: this.product.productStatus,
          productBrand: this.product.productBrand,
          productModel: this.product.productModel,
          productName: this.product.productName,
          productPrice: this.product.productPrice,
          unitStock: this.product.unitStock,
          discount: this.product.discount,
          imageUrl: this.product.imageUrl,
          productCategoryId: this.product.productCategoryId
        }, {
          headers
        })
          .then(() => {
            this.redirectAllProducts();
          }, function () {
            alert(`Failed!`);
          })
    }
  }

  async updateProduct() {
    var headers = this.authService.getHeaders();
    if (this.validateProduct()) {
      await
        axios.put(`${target_url}updateProduct/${this.product.productId}`, {
          productDescription: this.product.productDescription,
          productStatus: this.product.productStatus,
          productBrand: this.product.productBrand,
          productModel: this.product.productModel,
          productName: this.product.productName,
          productPrice: this.product.productPrice,
          unitStock: this.product.unitStock,
          discount: this.product.discount,
          imageUrl: this.product.imageUrl,
          productCategoryId: this.product.productCategoryId
        }, {
          headers
        })
          .then(() => {
            this.redirectAllProducts();
          }, function () {
            alert(`Failed!`);
          })
    }
  }

  setProduct(tempProduct: Product) {
    this.product = tempProduct;
  }



}
