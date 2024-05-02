import { Component, inject } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { OrderService } from '../../services/order.service';
import { ProductCategoryService } from '../../services/product-category.service';
import { ProductService } from '../../services/product.service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.css'
})
export class AdminPanelComponent {

  private productService = inject(ProductService)
  private categoryService = inject(ProductCategoryService);
  private customerService = inject(CustomerService);
  private orderService = inject(OrderService);

  redirectAllCategories() {
    this.categoryService.redirectAllCategories();
  }

  redirectAllProducts() {
    this.productService.redirectAllProducts();
  }

  redirectAllCustomers() {
    this.customerService.redirectAllCustomers();
  }

  redirectAllOrders() {
    this.orderService.redirectAllOrders();
  }
}
