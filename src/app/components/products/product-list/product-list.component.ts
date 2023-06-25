import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';
import { ProductCategory } from 'src/app/common/product-category';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MainService } from 'src/app/services/main.service';
import { ProductCategoryService } from 'src/app/services/product-category.service';
import { ProductService } from 'src/app/services/product.service';
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[] = [];
  categoryList: ProductCategory[] = [];
  hasAuthorityAdmin = false;

  constructor(private productService: ProductService, private categoryService: ProductCategoryService,
    private authService: AuthenticationService, private mainService: MainService) { }

  ngOnInit(): void {
    this.listAllCategories();
    this.listAllProducts();
    this.hasAuthorityAdmin = this.authService.isAdmin();
  }

  listAllProducts() {
    this.productService.collectAllProducts()
      .then((response) => {
        $(`#listingTable`).DataTable().destroy();
        setTimeout(function () {
          $(`#listingTable`).DataTable();
        }, 5)
        setTimeout(() => this.productList = response.data);
      })
  }

  listAllCategories() {
    this.categoryService.collectAllCategories()
      .then((response) => {
        setTimeout(() => this.categoryList = response.data);
      })
  }

  redirectAddProduct() {
    this.productService.redirectAddProduct();
  }

  getNumber(value: any) {
    return this.mainService.getNumber(value);
  }

  redirectProductDetails(productId: any) {
    this.productService.redirectProductDetails(productId);
  }

  redirectUpdateProduct(productId: any) {
    this.productService.redirectUpdateProduct(productId);
  }

  deleteProduct(productId: any) {
    if (confirm(`Remove this product\nIt will affect all related data!`)) {
      this.productService.deleteProduct(productId)
        .then(() => {
          this.listAllProducts();
          this.productService.redirectAllProducts();
        }, function () {
          alert(`Failed`);
        })
    }
  }

}
