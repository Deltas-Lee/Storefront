import { Component } from '@angular/core';
import { RouterModule } from "@angular/router";
import { ProductService } from './services/product.service';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ToastComponent } from './components/toast/toast.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, HeaderComponent, FooterComponent, ToastComponent],
  providers: [ProductService],
  template: `<app-header></app-header>
  <router-outlet></router-outlet>
  <app-footer></app-footer>
  <app-toast></app-toast>
  `,
})
export class AppComponent {
  title = 'storefront';
}
