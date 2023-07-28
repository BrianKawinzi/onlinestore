import { Component, Input } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() imageUrl: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() price: string = '';
  @Input() product: any;
  isItemInCart: boolean = false;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.isItemInCart = this.cartService.isItemInCart(this.product);

  }

  toggleCartStatus() {
    if (this.isItemInCart) {
      this.cartService.removeFromCart(this.product);
    } else {
      this.cartService.addToCart(this.product);
    }
    this.isItemInCart = !this.isItemInCart
  }



}
