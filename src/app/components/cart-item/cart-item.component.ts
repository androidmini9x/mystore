import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cart } from '../../models/cart';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent {
  @Input() cartItem: Cart;
  @Output() cartEvent = new EventEmitter();
  
  constructor() {
    this.cartItem = {
      id: 0,
      name: '',
      price: 0,
      quantity: 0,
      url: ''
    }
  }

  itemChanged(): void {
    this.cartEvent.emit(this.cartItem);
  }
}
