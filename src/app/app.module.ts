import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { FormsModule } from '@angular/forms';
import { RegistrationCompletedComponent } from './components/registration/registration-completed/registration-completed.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { CustomerListComponent } from './components/customers/customer-list/customer-list.component';
import { CustomerDetailsComponent } from './components/customers/customer-details/customer-details.component';
import { CategoryListComponent } from './components/productCategory/category-list/category-list.component';
import { CategoryFormComponent } from './components/productCategory/category-form/category-form.component';
import { CategoryUpdateFormComponent } from './components/productCategory/category-update-form/category-update-form.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';
import { ProductFormComponent } from './components/products/product-form/product-form.component';
import { ProductUpdateFormComponent } from './components/products/product-update-form/product-update-form.component';
import { MessageFormComponent } from './components/messages/message-form/message-form.component';
import { MessageSentComponent } from './components/messages/message-sent/message-sent.component';
import { MessageListComponent } from './components/messages/message-list/message-list.component';
import { MessageDetailsComponent } from './components/messages/message-details/message-details.component';
import { CartComponent } from './components/cart/cart/cart.component';
import { CartErrorComponent } from './components/cart/cartError/cart-error/cart-error.component';
import { BillingConfirmationComponent } from './components/checkout/billingConfirmation/billing-confirmation/billing-confirmation.component';
import { ShippingConfirmationComponent } from './components/checkout/shippingConfirmation/shipping-confirmation/shipping-confirmation.component';
import { PhoneConfirmationComponent } from './components/checkout/phone-confirmation/phone-confirmation.component';
import { OrderConfirmationComponent } from './components/checkout/order-confirmation/order-confirmation.component';
import { CancelOrderComponent } from './components/checkout/cancel-order/cancel-order.component';
import { OrderCompletedComponent } from './components/checkout/order-completed/order-completed.component';
import { StockErrorComponent } from './components/checkout/stock-error/stock-error.component';
import { OrderListComponent } from './components/orders/order-list/order-list.component';
import { OrderDetailsComponent } from './components/orders/order-details/order-details.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    RegistrationCompletedComponent,
    AdminPanelComponent,
    UnauthorizedComponent,
    CustomerListComponent,
    CustomerDetailsComponent,
    CategoryListComponent,
    CategoryFormComponent,
    CategoryUpdateFormComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ProductFormComponent,
    ProductUpdateFormComponent,
    MessageFormComponent,
    MessageSentComponent,
    MessageListComponent,
    MessageDetailsComponent,
    CartComponent,
    CartErrorComponent,
    BillingConfirmationComponent,
    ShippingConfirmationComponent,
    PhoneConfirmationComponent,
    OrderConfirmationComponent,
    CancelOrderComponent,
    OrderCompletedComponent,
    StockErrorComponent,
    OrderListComponent,
    OrderDetailsComponent,
    AboutComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
