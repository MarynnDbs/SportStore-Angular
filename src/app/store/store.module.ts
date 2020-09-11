import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store/store.component';
import { ModelModule } from '../model/model.module';
import { FormsModule } from '@angular/forms';
import { CounterDirective } from './counter.directive';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RouterModule } from '@angular/router';
 

@NgModule({
  declarations: [StoreComponent, CounterDirective, CartSummaryComponent, CartDetailsComponent, CheckoutComponent],
  imports: [CommonModule, ModelModule, BrowserModule, FormsModule, RouterModule],
  exports: [StoreComponent, CartDetailsComponent, CheckoutComponent],
})
export class StoreModule {}
