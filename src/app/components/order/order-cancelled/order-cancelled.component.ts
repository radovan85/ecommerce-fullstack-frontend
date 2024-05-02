import { Component, inject } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { NavbarComponent } from '../../navbar/navbar.component';

@Component({
  selector: 'app-order-cancelled',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './order-cancelled.component.html',
  styleUrl: './order-cancelled.component.css'
})
export class OrderCancelledComponent {

  private productService = inject(ProductService);

  redirectAllProducts() {
    this.productService.redirectAllProducts();
  }
}
