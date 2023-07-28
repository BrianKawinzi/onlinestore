import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] =[];

  addToCart(item: any){
    this.cartItems.push(item)
  }

  removeFromCart(item: any){
    const index = this.cartItems.findIndex((cartItem) => cartItem.id === item.id);
    if(index !== -1) {
      this.cartItems.splice(index, 1);
    }
  }

  isItemInCart(item: any): boolean {
    return this.cartItems.some((cartItem) => cartItem.id === item.id);
  }

  getCartItems(): any[] {
    return this.cartItems;
  }

  getCartItemCount(): number {
    return this.cartItems.length;
  }

  constructor() { }
}
