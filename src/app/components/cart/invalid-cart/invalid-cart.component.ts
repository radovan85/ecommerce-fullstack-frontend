import { Component, inject } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { NavbarComponent } from '../../navbar/navbar.component';

@Component({
  selector: 'app-invalid-cart',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './invalid-cart.component.html',
  styleUrl: './invalid-cart.component.css'
})
export class InvalidCartComponent {

  private productService = inject(ProductService);

  redirectAllProducts() {
    this.productService.redirectAllProducts();
  }
}
