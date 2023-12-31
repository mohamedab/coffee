import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CoffeeMenuComponent} from "./coffee-menu/coffee-menu.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {ContactInfoComponent} from "./contact-info/contact-info.component";
import {OrderDetailComponent} from "./order-detail/order-detail.component";
import {CartComponent} from "./cart/cart.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";

const routes: Routes = [
  { path: '', redirectTo: '/menu', pathMatch: 'full' },
  { path: 'menu', component: CoffeeMenuComponent },
  { path: 'order', component: OrderDetailComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'contact', component: ContactInfoComponent },
  { path: 'cart', component: CartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
