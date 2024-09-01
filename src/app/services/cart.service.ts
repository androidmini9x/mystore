import { Injectable } from '@angular/core';
import { Cart } from '../models/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products: Cart[] = [];
  constructor() {}

  addToCart(p: Cart): void {
    window.alert(`${p.name} x${p.quantity} add to Cart`);
    const idx = this.products.findIndex(e => e.id === p.id);
    if (idx !== -1) {
      this.products[idx].quantity += p.quantity;
    } else {
      this.products.unshift(p);
    }
  }

  updateProduct(p: Cart): Cart[] {
    this.products = this.products.map(c => {
      if (p.id === c.id) {
        return p;
      }
      return c;
    })
    return this.products;
  }

  removeProducts(p: Cart): Cart[] {
    this.products = this.products.filter(c => c.id !== p.id);
    window.alert(`${p.name} x${p.quantity} removed from Cart`);
    return this.products
  }

  emptyCart(): void {
    this.products = [];
  }
}
