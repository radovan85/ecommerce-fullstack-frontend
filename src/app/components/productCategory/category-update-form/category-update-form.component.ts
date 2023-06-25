import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductCategory } from 'src/app/common/product-category';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ProductCategoryService } from 'src/app/services/product-category.service';

@Component({
  selector: 'app-category-update-form',
  templateUrl: './category-update-form.component.html',
  styleUrls: ['./category-update-form.component.css']
})
export class CategoryUpdateFormComponent implements OnInit {

  constructor(private authService:AuthenticationService,private categoryService:ProductCategoryService,
    private route:ActivatedRoute) { }

  tempCategory:ProductCategory = new ProductCategory;

  ngOnInit(): void {
    this.getCategory(this.route.snapshot.params["categoryId"]);
  }

  updateCategory(){
    this.categoryService.setCategory(this.tempCategory);
    this.categoryService.updateCategory();
  }

  getCategory(categoryId:any){
    this.categoryService.getCategoryDetails(categoryId)
    .then((response) => {
      this.tempCategory = response.data;
    })
  }

}
