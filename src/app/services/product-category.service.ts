import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import axios from 'axios';
import { Router } from '@angular/router';
import { ValidationService } from './validation.service';
import { ProductCategory } from '../common/product-category';

var target_url = `http://localhost:8080/api/categories/`;

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {

  category: ProductCategory = new ProductCategory;

  constructor(private authService: AuthenticationService, private router: Router,
    private validationService: ValidationService) { }

  collectAllCategories() {
    var headers = this.authService.getHeaders();
    return axios.get(`${target_url}allCategories`, {
      headers
    })
  }

  redirectAllCategories() {
    this.router.navigate([`categories`]);
  }

  redirectAddCategory() {
    this.router.navigate([`categories/addCategory`]);
  }

  getTargetUrl() {
    return target_url;
  }

  setCategory(tempCategory: ProductCategory) {
    this.category = tempCategory;
  }

  getCategoryDetails(categoryId:any) {
    var headers = this.authService.getHeaders();
    return axios.get(`${target_url}categoryDetails/${categoryId}`, {
      headers
    })
  }

  async addCategory() {
    var headers = this.authService.getHeaders();
    if (this.validationService.validateCategory()) {
      await
        axios.post(`${target_url}storeCategory`, {
          name: this.category.name
        }, {
          headers
        })
          .then(() => {
            this.redirectAllCategories();
          }, function () {
            alert(`Failed`);
          })
    }
  }

  async updateCategory() {
    var headers = this.authService.getHeaders();
    if (this.validationService.validateCategory()) {
      await
        axios.put(`${target_url}updateCategory/${this.category.productCategoryId}`, {
          name: this.category.name
        }, {
          headers
        })
          .then(() => {
            this.redirectAllCategories();
          }, function () {
            alert(`Failed`);
          })
    }
  }

  redirectUpdateCategory(categoryId: any) {
    this.router.navigate([`categories/updateCategory/${categoryId}`]);
  }

  async deleteCategory(categoryId: any) { 
    var headers = this.authService.getHeaders();
    return await axios.delete(`${target_url}deleteCategory/${categoryId}`,{
      headers
    })
  }
}
