import { Component } from '@angular/core';
import { Cart } from '../../models/cart';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cart: Cart[] = []
  total = 0;
  fullname = '';
  address = '';
  card = '';


  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cart = this.cartService.products;
    this.total = this.cart.map(c => c.price * c.quantity).reduce((a, b) => a + b, 0);
  }

  updateChange(c: Cart): void {
    if (c.quantity === 0) {
      this.cart = this.cartService.removeProducts(c);
    } else {
      this.cart = this.cartService.updateProduct(c);
    }
    this.total = this.cart.map(c => c.price * c.quantity).reduce((a, b) => a + b, 0);
  }

  SubmitForm() {
    window.alert({
      fullname: this.fullname,
      address: this.address,
      card: this.card,
    });
  }
}
