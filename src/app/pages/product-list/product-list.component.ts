import { ProductCardComponent } from './../../components/product-card/product-card.component';
import { Component, inject, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { ProductDetailsComponent } from '../../components/product-details/product-details.component';
import { LoadingSpinnerComponent } from '../../components/loading-spinner/loading-spinner.component';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, ProductDetailsComponent, LoadingSpinnerComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  categories: string[] = [];
  selectedCategory: string | null = null;
  selectedProduct: Product | null = null;
  isModalOpen = false;
  isLoading = true;

  private productService = inject(ProductService);
  private cart = inject(CartService);

  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any): void {
    if (this.cart.totalItems() > 0) {
      $event.preventDefault();
      $event.returnValue = 'You have items in your cart. If you leave or refresh, your cart will be lost.';
    }
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
      this.extractCategories();
      this.isLoading = false;
    });
  }

  private extractCategories(): void {
    const set = new Set<string>();
    for (const p of this.products) {
      if (p.category) set.add(p.category);
    }
    this.categories = Array.from(set).sort((a, b) => a.localeCompare(b));
  }

  /** Select a category or clear when null */
  selectCategory(cat: string | null): void {
    this.selectedCategory = cat;
  }

  /** Filter products based on selected category */
  filteredProducts(): Product[] {
    if (!this.selectedCategory) return this.products;
    return this.products.filter(p => p.category === this.selectedCategory);
  }

  /** Open product details modal */
  showProductDetails(product: Product): void {
    this.selectedProduct = product;
    this.isModalOpen = true;
  }

  /** Close product details modal */
  closeProductDetails(): void {
    this.isModalOpen = false;
    this.selectedProduct = null;
  }
}
