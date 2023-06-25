import { Component, OnInit } from '@angular/core';
import { ProductCategory } from 'src/app/common/product-category';
import { ProductCategoryService } from 'src/app/services/product-category.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {

  category:ProductCategory = new ProductCategory;

  constructor(private categoryService:ProductCategoryService) { }

  ngOnInit(): void {
  }

  addCategory(){
    this.categoryService.setCategory(this.category);
    this.categoryService.addCategory();
  }
}
