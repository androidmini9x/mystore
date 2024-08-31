import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';
import { Cart } from '../../models/cart';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {
  products: Product[] = [];

  constructor(private productsService: ProductsService, private cartService: CartService) {}

  ngOnInit() {
    this.productsService.getProducts().subscribe(res => {
      this.products = res;
    })
  }

  addProductToCart(p: Cart): void {
    this.cartService.addToCart(p);
  }
}
