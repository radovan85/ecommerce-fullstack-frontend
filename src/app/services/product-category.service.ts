import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import { ValidationService } from './validation.service';



@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {

  private router = inject(Router);
  private validationService = inject(ValidationService);
  private targetUrl = `http://localhost:8080/api/categories/`;

  redirectAllCategories() {
    this.router.navigate([`categories`]);
  }

  redirectAddCategory() {
    this.router.navigate([`categories/addCategory`]);
  }

  collectAllCategories() {
    return axios.get(`${this.targetUrl}allCategories`);
  }

  async deleteCategory(categoryId: any) {
    return await axios.delete(`${this.targetUrl}deleteCategory/${categoryId}`);
  }

  getCategoryDetails(categoryId: any) {
    return axios.get(`${this.targetUrl}categoryDetails/${categoryId}`);
  }

  redirectUpdateCategory(categoryId: any) {
    this.router.navigate([`categories/updateCategory/${categoryId}`]);
  }

  public getTargetUrl(): string {
    return this.targetUrl;
  }



}
