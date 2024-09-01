import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { Cart } from '../../models/cart';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrl: './order-confirmation.component.css'
})
export class OrderConfirmationComponent {
  fullname = ''
  total = 0;
  cart: Cart[] = []

  constructor(private router: Router, private cartService: CartService) {}

  ngOnInit(): void {
    const state = history.state;
    if (state.fullname && state.total) {
      this.fullname = state.fullname;
      this.total = state.total;
      this.cart = this.cartService.products;
      this.cartService.emptyCart();
    } else {
      this.router.navigate(['/']);
    }
  }
}
