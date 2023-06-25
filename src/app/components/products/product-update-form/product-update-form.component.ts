import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductCategory } from 'src/app/common/product-category';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ProductCategoryService } from 'src/app/services/product-category.service';
import { ProductService } from 'src/app/services/product.service';
import { ValidationService } from 'src/app/services/validation.service';

@Component({
  selector: 'app-product-update-form',
  templateUrl: './product-update-form.component.html',
  styleUrls: ['./product-update-form.component.css']
})
export class ProductUpdateFormComponent implements OnInit {

  product: Product = new Product;
  categoryList: ProductCategory[] = [];
  public checklist: any[];

  constructor(private authService: AuthenticationService, private productService: ProductService,
    private validationService: ValidationService, private route: ActivatedRoute,
    private categoryService: ProductCategoryService) {
    this.checklist = [
      { id: 1, value: "Brand New", isSelected: false },
      { id: 2, value: "Old", isSelected: false }
    ];
  }

  ngOnInit(): void {
    this.listAllCategories();
    this.getProductDetails(this.route.snapshot.params[`productId`]);
  }

  isAllSelected(item: any) {
    this.checklist.forEach(val => {
      if (val.id == item.id) {
        val.isSelected = !val.isSelected;
        this.validationService.setProductStatus(val.value);
        this.product.productStatus = val.value;
      }
      else {
        val.isSelected = false;
      }
    });
  }

  getProductDetails(productId: any) {
    this.productService.getProduct(productId)
      .then((response) => {
        this.product = response.data;
      }, function () {
        alert(`Failed`);
      })
  }

  setProductStatus(productStatus:string){
    this.validationService.setProductStatus(productStatus);
  }

  updateProduct() {
    this.productService.setProduct(this.product);
    this.productService.updateProduct();
  }

  validateNumber(value: any) {
    return this.validationService.validateNumber(value);
  }

  listAllCategories() {
    this.categoryService.collectAllCategories()
      .then((response) => {
        setTimeout(() => this.categoryList = response.data);
      })
  }



}
