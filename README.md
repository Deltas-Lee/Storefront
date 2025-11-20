# DeltaStore - Angular Storefront Application

A modern, feature-rich e-commerce storefront built with Angular 19, showcasing best practices in state management, routing, and user experience design.

## Screenshots
<div align="center">
  <img src="https://github.com/Deltas-Lee/Storefront/blob/master/src/assets/products-image.png" alt="Products Page" width="48%" />
  <img src="https://github.com/Deltas-Lee/Storefront/blob/master/src/assets/product-details-img.png" alt="Product Details" width="48%" />
</div>

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)
- Angular CLI (v19.0.0)

### Installation

1. **Install Angular CLI globally** (if not already installed):

   ```bash
   npm install -g @angular/cli@19
   ```

2. **Install project dependencies**:

   ```bash
   cd storefront
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm start
   # or
   ng serve
   ```

4. **Open your browser** and navigate to `http://localhost:4200/`

## 📁 Project Structure

``` bash
storefront/
├── src/
│   ├── app/
│   │   ├── components/          # Reusable UI components
│   │   │   ├── cart/           # Shopping cart component
│   │   │   ├── footer/         # Footer component
│   │   │   ├── header/         # Navigation header
│   │   │   ├── loading-spinner/ # Loading state indicator
│   │   │   ├── product-card/   # Product display card
│   │   │   ├── product-details/ # Product detail modal
│   │   │   └── toast/          # Toast notifications
│   │   ├── pages/              # Route-level components
│   │   │   ├── checkout/       # Checkout page
│   │   │   └── product-list/   # Product listing page
│   │   ├── models/             # TypeScript interfaces
│   │   │   └── product.model.ts
│   │   ├── services/           # Business logic services
│   │   │   ├── cart.service.ts      # Cart state management
│   │   │   ├── product.service.ts   # Product data fetching
│   │   │   └── toast.service.ts     # Toast notifications
│   │   ├── app.config.ts       # Application configuration
│   │   ├── app.routes.ts       # Routing configuration
│   │   └── app.component.ts    # Root component
│   ├── assets/                 # Static assets
│   ├── styles.scss            # Global styles
│   └── index.html             # Main HTML file
├── angular.json               # Angular workspace configuration
├── package.json              # Dependencies and scripts
└── tsconfig.json            # TypeScript configuration
```

## ✨ Features

### Core Functionality

- **Product Browsing**: Display all products from [Fake Store API](https://fakestoreapi.com/)
- **Category Filtering**: Filter products by category with responsive sidebar
- **Shopping Cart**: Add, remove, update quantities, and manage cart items
- **Product Details**: View detailed product information in modal
- **Toast Notifications**: Real-time feedback for user actions
- **Loading States**: Smooth loading indicators for better UX

### Advanced Features

- **Signal-Based State Management**: Using Angular Signals for reactive state
- **Computed Values**: Automatic recalculation of totals, taxes, and derived state
- **Browser Warnings**: Alert users before losing cart data on refresh
- **Custom Confirmation Dialogs**: Beautiful modal confirmations instead of browser alerts
- **Responsive Design**: Mobile-friendly layout with breakpoints
- **Accessibility**: ARIA labels, keyboard navigation, screen reader support
- **Animations**: Smooth transitions and micro-interactions

### Technical Highlights

- **Standalone Components**: Modern Angular architecture without NgModules
- **RxJS Integration**: Observable-based HTTP requests
- **CSS Grid & Flexbox**: Modern layout techniques
- **SCSS Variables**: Maintainable styling with CSS custom properties
- **TypeScript Strict Mode**: Type-safe code throughout

## 🎨 Key Components

### Services

#### CartService

- Signal-based reactive cart state management
- Computed totals and item counts
- Persistent state during session
- Toast notification integration

#### ProductService

- HTTP client for Fake Store API
- Observable-based data fetching
- Type-safe product models

#### ToastService

- Global notification system
- Multiple toast types (success, error, info, warning)
- Auto-dismiss functionality
- Signal-based state management

### Components

#### Header

- Sticky navigation with gradient background
- Active route highlighting
- Cart badge with item count
- Responsive mobile menu

#### Product List

- Grid layout with category filters
- Loading spinner during data fetch
- Empty state handling
- Product detail modal integration

#### Cart

- Item management (add, remove, update quantity)
- Real-time total calculations
- Tax estimation (15%)
- Confirmation dialog for clearing cart
- Enhanced empty state with call-to-action

#### Product Card

- Consistent card heights
- Hidden "Add to Cart" button (reveals on hover)
- Image optimization
- Truncated text with ellipsis

## 🛠️ Available Scripts

```bash
# Start development server
npm start

# Build for production
npm run build

# Run unit tests
npm test

# Run linter
npm run lint

# Generate component
ng generate component component-name
```

## 🔧 Configuration

### Angular Version

This project uses Angular 19.0.0 with standalone components architecture.

### API Integration

The application consumes the [Fake Store API](https://fakestoreapi.com/):

- Products endpoint: `https://fakestoreapi.com/products`

### Routing

- `/products` - Product listing page (default)
- `/cart` - Shopping cart page
- `/` - Redirects to `/products`

## 🎯 State Management

This application uses **Angular Signals** for state management:

```typescript
// Example: Cart Service with Signals
private readonly _items = signal<CartItem[]>([]);
readonly items = computed(() => this._items());
readonly totalItems = computed(() => 
  this._items().reduce((sum, item) => sum + item.quantity, 0)
);
```

## 🎨 Styling Approach

- **SCSS** for enhanced CSS capabilities
- **CSS Custom Properties** for theming
- **BEM-like naming** for component styles
- **CSS Grid & Flexbox** for layouts
- **Media queries** for responsive design

## ♿ Accessibility Features

- Semantic HTML elements
- ARIA labels and roles
- Keyboard navigation support
- Focus visible states
- Screen reader announcements
- Color contrast compliance

## 🐛 Known Limitations

- Cart data is not persisted (resets on page refresh)
- Checkout is non-functional (UI only)

## 🚀 Future Enhancements

Potential improvements if time permits:

- [ ] LocalStorage cart persistence
- [ ] Product search with debouncing
- [ ] Sort products by price/rating/name
- [ ] Pagination or infinite scroll
- [ ] Wishlist functionality
- [ ] Dark mode theme
- [ ] E2E tests with Cypress

## 📚 Additional Resources

- [Angular Documentation](https://angular.io/docs)
- [Angular Signals Guide](https://angular.io/guide/signals)
- [Fake Store API Docs](https://fakestoreapi.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [SCSS Documentation](https://sass-lang.com/documentation)

## 📄 License

This project was created for learning purpose.

---

### Built with ❤️ using Angular 19 and TypeScript
