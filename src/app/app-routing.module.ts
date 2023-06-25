import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { AdminGuard } from './guards/admin.guard';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { UnidentifiedGuard } from './guards/unidentified.guard';
import { CustomerListComponent } from './components/customers/customer-list/customer-list.component';
import { RegistrationCompletedComponent } from './components/registration/registration-completed/registration-completed.component';
import { CustomerDetailsComponent } from './components/customers/customer-details/customer-details.component';
import { CategoryListComponent } from './components/productCategory/category-list/category-list.component';
import { CategoryFormComponent } from './components/productCategory/category-form/category-form.component';
import { CategoryUpdateFormComponent } from './components/productCategory/category-update-form/category-update-form.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';
import { ProductUpdateFormComponent } from './components/products/product-update-form/product-update-form.component';
import { ProductFormComponent } from './components/products/product-form/product-form.component';
import { MessageListComponent } from './components/messages/message-list/message-list.component';
import { MessageFormComponent } from './components/messages/message-form/message-form.component';
import { MessageSentComponent } from './components/messages/message-sent/message-sent.component';
import { UserGuard } from './guards/user.guard';
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

const routes: Routes = [
  {
    path: `home`,
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: `login`,
    component: LoginComponent,
    canActivate: [UnidentifiedGuard]
  },
  {
    path: `register`,
    component: RegistrationComponent,
    canActivate: [UnidentifiedGuard]
  },
  {
    path: `admin`,
    component: AdminPanelComponent,
    canActivate: [AdminGuard]
  },
  {
    path: `unauthorized`,
    component: UnauthorizedComponent
  },
  {
    path: `customers`,
    component: CustomerListComponent,
    canActivate: [AdminGuard]
  },
  {
    path: `customers/customerDetails/:customerId`,
    component: CustomerDetailsComponent,
    canActivate: [AdminGuard]
  },
  {
    path: `registrationCompleted`,
    component: RegistrationCompletedComponent,
    canActivate: [UnidentifiedGuard]
  },
  {
    path: `categories`,
    component: CategoryListComponent,
    canActivate: [AdminGuard]
  },
  {
    path: `categories/addCategory`,
    component: CategoryFormComponent,
    canActivate: [AdminGuard]
  },
  {
    path: `categories/updateCategory/:categoryId`,
    component: CategoryUpdateFormComponent,
    canActivate: [AdminGuard]
  },
  {
    path: `products`,
    component: ProductListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: `products/productDetails/:productId`,
    component: ProductDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: `products/updateProduct/:productId`,
    component: ProductUpdateFormComponent,
    canActivate: [AdminGuard]
  },
  {
    path: `products/addProduct`,
    component: ProductFormComponent,
    canActivate: [AdminGuard]
  },
  {
    path: `messages`,
    component: MessageListComponent,
    canActivate: [AdminGuard]
  },
  {
    path: `messages/messageForm`,
    component: MessageFormComponent,
    canActivate: [UserGuard]
  },
  {
    path: `messages/messageSent`,
    component: MessageSentComponent,
    canActivate: [UserGuard]
  },
  {
    path: `messages/messageDetails/:messageId`,
    component: MessageDetailsComponent,
    canActivate: [AdminGuard]
  },
  {
    path: `cart`,
    component: CartComponent,
    canActivate: [UserGuard]
  },
  {
    path: `cartError`,
    component: CartErrorComponent,
    canActivate: [UserGuard]
  },
  {
    path: `order/confirmBilling`,
    component: BillingConfirmationComponent,
    canActivate: [UserGuard]
  },
  {
    path: `order/confirmShipping`,
    component: ShippingConfirmationComponent,
    canActivate: [UserGuard]
  },
  {
    path: `order/confirmPhone`,
    component: PhoneConfirmationComponent,
    canActivate: [UserGuard]
  },
  {
    path: `order/confirmOrder`,
    component: OrderConfirmationComponent,
    canActivate: [UserGuard]
  },
  {
    path: `order/cancel`,
    component: CancelOrderComponent,
    canActivate: [UserGuard]
  },
  {
    path: `order/orderCompleted`,
    component: OrderCompletedComponent,
    canActivate: [UserGuard]
  },
  {
    path: `order/stockError`,
    component: StockErrorComponent,
    canActivate: [UserGuard]
  },
  {
    path: `order/allOrders`,
    component: OrderListComponent,
    canActivate: [AdminGuard]
  },
  {
    path: `order/orderDetails/:orderId`,
    component: OrderDetailsComponent,
    canActivate: [AdminGuard]
  },
  {
    path: `about`,
    component: AboutComponent
  },
  { path: `**`, redirectTo: `/home`, pathMatch: `full` }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
