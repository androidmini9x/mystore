import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductDetialComponent } from './components/product-detial/product-detial.component';

const routes: Routes = [
  {path: '', component: ProductsListComponent},
  {path: 'cart', component: CartComponent},
  {path: 'products/:id', component: ProductDetialComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
