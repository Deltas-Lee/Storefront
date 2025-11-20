import { Injectable, computed, signal, inject } from '@angular/core';
import { Product } from '../models/product.model';
import { ToastService } from './toast.service';

export interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({ providedIn: 'root' })
export class CartService {
  // Signal holding current cart items
  private readonly _items = signal<CartItem[]>([]);
  private toast = inject(ToastService);

  readonly items = computed(() => this._items());
  readonly totalItems = computed(() => this._items().reduce((sum, ci) => sum + ci.quantity, 0));
  readonly totalPrice = computed(() => this._items().reduce((sum, ci) => sum + ci.product.price * ci.quantity, 0));

  add(product: Product): void {
    this._items.update(list => {
      const existing = list.find(ci => ci.product.id === product.id);
      if (existing) {
        this.toast.success(`Added another "${product.title}" to cart`);
        return list.map(ci => ci.product.id === product.id ? { ...ci, quantity: ci.quantity + 1 } : ci);
      }
      this.toast.success(`"${product.title}" added to cart`);
      return [...list, { product, quantity: 1 }];
    });
  }

  remove(productId: number): void {
    const item = this._items().find(ci => ci.product.id === productId);
    if (item) {
      this.toast.info(`"${item.product.title}" removed from cart`);
    }
    this._items.update(list => list.filter(ci => ci.product.id !== productId));
  }

  updateQuantity(productId: number, quantity: number): void {
    if (quantity < 1) {
      this.remove(productId);
      return;
    }
    this._items.update(list => list.map(ci => ci.product.id === productId ? { ...ci, quantity } : ci));
  }

  clear(): void {
    this._items.set([]);
    this.toast.info('Cart cleared');
  }
}

