import { Component, OnInit } from '@angular/core';
import { ProductCategory } from 'src/app/common/product-category';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ProductCategoryService } from 'src/app/services/product-category.service';
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categoryList: ProductCategory[] = [];

  constructor(private authService: AuthenticationService, private categoryService: ProductCategoryService) { }

  ngOnInit(): void {
    this.listAllCategories();
  }

  listAllCategories() {
    var headers = this.authService.getHeaders();
    this.categoryService.collectAllCategories()
      .then((response) => {
        $(`#listingTable`).DataTable().destroy();
        setTimeout(function () {
          $(`#listingTable`).DataTable();
        }, 1)
        setTimeout(() => this.categoryList = response.data);
      })
  }

  redirectAddCategory() {
    this.categoryService.redirectAddCategory();
  }

  redirectUpdateCategory(categoryId: any) {
    this.categoryService.redirectUpdateCategory(categoryId);
  }

  deleteCategory(categoryId: any) {
    if (confirm(`Remove this category?\nAll related data will be affected!`)) {
      this.categoryService.deleteCategory(categoryId)
        .then(() => {
          this.listAllCategories();
          this.categoryService.redirectAllCategories();
        }, function () {
          alert(`Failed!`);
        })
    }
  }

}
