import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  numCart = 0;
  constructor(private cart: CartService) {}

  ngOnInit() {
    this.numCart = this.cart.products.length;
  }
}
