import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';
import { ProductCategory } from 'src/app/common/product-category';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MainService } from 'src/app/services/main.service';
import { ProductCategoryService } from 'src/app/services/product-category.service';
import { ProductService } from 'src/app/services/product.service';
import { ValidationService } from 'src/app/services/validation.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  product: Product = new Product
  categoryList: ProductCategory[] = [];
  public checklist: any[];

  constructor(private productService: ProductService, private categoryService: ProductCategoryService,
    authService: AuthenticationService,private validationService:ValidationService) {
    this.checklist = [
      { id: 1, value: "Brand New", isSelected: false },
      { id: 2, value: "Old", isSelected: false }
    ];
  }

  ngOnInit(): void {
    this.listAllCategories();
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

  setProductStatus(productStatus:string){
    this.validationService.setProductStatus(productStatus);
  }

  listAllCategories() {
    this.categoryService.collectAllCategories()
      .then((response) => {
        setTimeout(() => this.categoryList = response.data);
      })
  }

  addProduct() {
    this.productService.setProduct(this.product);
    this.productService.addProduct();
  }

  validateNumber(value:any){
    return this.validationService.validateNumber(value);
  }


}
