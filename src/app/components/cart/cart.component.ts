import { Component, computed, inject, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  private cart = inject(CartService);

  readonly items = this.cart.items;
  readonly totalPrice = this.cart.totalPrice;
  readonly totalItems = this.cart.totalItems;
  showConfirmModal = false;

  // Computed estimated tax
  readonly tax = computed(() => +(this.totalPrice() * 0.15).toFixed(2));

  trackById = (_: number, item: { product: { id: number } }) => item.product.id;

  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any): void {
    if (this.totalItems() > 0) {
      $event.preventDefault();
      $event.returnValue = 'You have items in your cart. If you leave or refresh, your cart will be lost.';
    }
  }

  increase(id: number) {
    const item = this.items().find(i => i.product.id === id);
    if (item) this.cart.updateQuantity(id, item.quantity + 1);
  }

  decrease(id: number) {
    const item = this.items().find(i => i.product.id === id);
    if (item) this.cart.updateQuantity(id, item.quantity - 1);
  }

  remove(id: number) {
    this.cart.remove(id);
  }

  openConfirmModal() {
    this.showConfirmModal = true;
  }

  closeConfirmModal() {
    this.showConfirmModal = false;
  }

  confirmClear() {
    this.cart.clear();
    this.showConfirmModal = false;
  }

  clear() {
    this.openConfirmModal();
  }
}
