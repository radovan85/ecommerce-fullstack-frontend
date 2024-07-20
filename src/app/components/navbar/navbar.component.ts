import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { User } from '../../classes/user';
import { AuthService } from '../../services/auth.service';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {


  private isAuthenticated = false;
  private hasAuthorityAdmin = false;
  private hasAuthorityUser = false;
  private authUser: User = new User;
  private router = inject(Router);
  private authService = inject(AuthService);
  private userService = inject(UserService);
  private productService = inject(ProductService);
  private cartService = inject(CartService);


  ngOnInit(): void {
    Promise.all([
      this.hasAuthorityAdmin = this.authService.isAdmin(),
      this.isAuthenticated = this.authService.isAuthenticated(),
      this.hasAuthorityUser = this.authService.isUser(),
      this.getCurrentUser()
    ])
  }

  logout() {
    this.authService.logout();
  }

  redirectAdmin() {
    this.router.navigate([`admin`]);
  }

  redirectLogin() {
    this.router.navigate([`login`]);
  }
  redirectCart() {
    this.cartService.redirectCart();
  }
  redirectAllProducts() {
    this.productService.redirectAllProducts();
  }

  redirectHome() {
    this.router.navigate([`home`]);
  }

  getCurrentUser() {
    if (this.authService.isAuthenticated()) {
      this.userService.getCurrentUser()
        .then((response) => {
          setTimeout(() => {
            this.authUser = response.data;
          })
        })
    }
  }

  public getIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }

  public getHasAuthorityAdmin(): boolean {
    return this.hasAuthorityAdmin;
  }

  public getHasAuthorityUser(): boolean {
    return this.hasAuthorityUser;
  }

  public getAuthUser(): User {
    return this.authUser;
  }




}
