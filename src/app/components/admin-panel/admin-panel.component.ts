import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminMessageService } from 'src/app/services/admin-message.service';
import { CustomerService } from 'src/app/services/customer.service';
import { OrderService } from 'src/app/services/order.service';
import { ProductCategoryService } from 'src/app/services/product-category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  constructor(private customerService:CustomerService,private categoryService:ProductCategoryService,
    private productService:ProductService,private messageService:AdminMessageService,
    private orderService:OrderService) { }

  ngOnInit(): void {
  }

  redirectAllCustomers(){
    this.customerService.redirectAllCustomers();
  }

  redirectAllCategories(){
    this.categoryService.redirectAllCategories();
  }

  redirectAllProducts(){
    this.productService.redirectAllProducts();
  }

  redirectAllMessages(){
    this.messageService.redirectAllMessages();
  }

  redirectAllOrders(){
    this.orderService.redirectAllOrders();
  }
}
