import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';
import { Cart } from '../../models/cart';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-detial',
  templateUrl: './product-detial.component.html',
  styleUrl: './product-detial.component.css'
})
export class ProductDetialComponent {
  product: Product;
  error: boolean = false;
  quantity = 1;

  constructor(private productsService: ProductsService, private route: ActivatedRoute, private cart: CartService) {
    this.product = {
      name: '',
      description: '',
      id: 0,
      price: 0,
      url: ''
    }
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.productsService.getProducts()
      .subscribe(res => {
        const p: Product | undefined = res.find(e => e.id === parseInt(id));
        console.log(res);
        if (!p) {
          this.error = true;
        } else {
          this.product = p;
          console.log(p);
        }
      })
    })
  }

  addToCart(p: Product) {
    const item: Cart = {
      id: p.id,
      name: p.name,
      price: p.price,
      url: p.url,
      quantity: this.quantity
    }
    this.cart.addToCart(item);
  }
}
