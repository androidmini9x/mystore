import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';
import { Cart } from '../../models/cart';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() product: Product;
  @Output() prodEvent = new EventEmitter();
  quantity = 1;

  constructor() {
    this.product = {
      name: '',
      description: '',
      id: 0,
      price: 0,
      url: ''
    }
  }

  addProduct(): void {
    const cartItem: Cart = {
      id: this.product.id,
      name: this.product.name,
      price: this.product.price,
      url: this.product.url,
      quantity: this.quantity,
    }
    this.prodEvent.emit(cartItem);
  }
}
