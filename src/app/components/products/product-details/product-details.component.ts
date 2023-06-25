import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductCategory } from 'src/app/common/product-category';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CartService } from 'src/app/services/cart.service';
import { MainService } from 'src/app/services/main.service';
import { ProductCategoryService } from 'src/app/services/product-category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  tempProduct: Product = new Product;
  categoryList: ProductCategory[] = [];
  hasAuthorityUser = false;

  constructor(private authService: AuthenticationService, private productService: ProductService,
    private route: ActivatedRoute, private categoryService: ProductCategoryService,
    private mainService: MainService,private cartService:CartService) { }

  ngOnInit(): void {
    this.listAllCategories();
    this.getProductDetails(this.route.snapshot.params["productId"]);
    this.hasAuthorityUser = this.authService.isUser();
  }

  getProductDetails(productId: any) {
    this.productService.getProduct(productId)
      .then((response) => {
        this.tempProduct = response.data;
      }, function () {
        alert(`Failed!`);
      })
  }

  listAllCategories() {
    this.categoryService.collectAllCategories()
      .then((response) => {
        setTimeout(() => this.categoryList = response.data);
      })
  }

  getNumber(value: any) {
    return this.mainService.getNumber(value);
  }

  redirectAllProducts() {
    this.productService.redirectAllProducts();
  }

  addToCart(productId:any){
    this.cartService.addCartItem(productId);
  }

}
