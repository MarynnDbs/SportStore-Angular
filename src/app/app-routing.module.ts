import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './store/store/store.component';
import { CartDetailsComponent } from './store/cart-details/cart-details.component';
import { CheckoutComponent } from './store/checkout/checkout.component';
import { StoreFirstGuard } from './storeFirst.guard';

const routes: Routes = [
  { path: 'store', component: StoreComponent, canActivate: [StoreFirstGuard] },
  {
    path: 'cart',
    component: CartDetailsComponent,
    canActivate: [StoreFirstGuard],
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    canActivate: [StoreFirstGuard],
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
    canActivate: [StoreFirstGuard],
  },
  { path: '**', redirectTo: '/store' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [StoreFirstGuard],
})
export class AppRoutingModule {}
