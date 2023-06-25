import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/common/user';
import { AdminMessageService } from 'src/app/services/admin-message.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CartService } from 'src/app/services/cart.service';
import { MainService } from 'src/app/services/main.service';
import { OrderService } from 'src/app/services/order.service';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isAuthenticated: boolean = false;
  hasAuthorityAdmin: boolean = false;
  hasAuthorityUser: boolean = false;
  authUser: User = new User;

  constructor(private mainService: MainService, private authService: AuthenticationService,
    private productService: ProductService, private userService: UserService,
    private messageService:AdminMessageService,private cartService:CartService) { }

  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated();
    this.hasAuthorityAdmin = this.authService.isAdmin();
    this.hasAuthorityUser = this.authService.isUser();
    if (this.isAuthenticated) {
      this.getCurrentUser();
    }
  }

  redirectHome() {
    this.mainService.redirectHome();
  }

  redirectLogin() {
    this.mainService.redirectLogin();
  }

  redirectRegister() {
    this.mainService.redirectRegister();
  }

  logout() {
    this.authService.logout();
  }

  redirectAdmin() {
    this.mainService.redirectAdmin();
  }

  redirectAllProducts() {
    this.productService.redirectAllProducts();
  }

  redirectAbout(){
    this.mainService.redirectAbout();
  }

  getCurrentUser() {
    this.userService.getCurrentUser()
      .then((response) => {
        this.authUser = response.data;
      })
      .catch(() => {
        localStorage.clear();
        window.location.reload();
      })
  }

  redirectMessageForm(){
    this.messageService.redirectMessageForm();
  }

  redirectCart(){
    this.cartService.redirectCart();
  }

}
