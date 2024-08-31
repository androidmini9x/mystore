import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products: Product[] = [];
  constructor() {}

  addToCart(p: Product) {
    this.products.unshift(p);
  }

}
