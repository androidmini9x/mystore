import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() product: Product;

  constructor() {
    this.product = {
      name: '',
      description: '',
      id: 0,
      price: 0,
      url: ''
    }
  }
}
