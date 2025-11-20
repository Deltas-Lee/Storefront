import { Product } from './../../models/product.model';
import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Output() showDetails = new EventEmitter<Product>();
  private cart = inject(CartService);

  addToCart() {
    this.cart.add(this.product);
  }

  viewDetails() {
    this.showDetails.emit(this.product);
  }
}
