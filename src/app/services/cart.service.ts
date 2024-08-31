import { Injectable } from '@angular/core';
import { Cart } from '../models/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products: Cart[] = [];
  constructor() {}

  addToCart(p: Cart) {
    this.products.unshift(p);
  }

}
