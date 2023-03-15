import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { CartItem } from '../models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: CartItem[] = [];
  
  

  constructor() { }

  addToCart(product: Product, quantity: number): void {
  
    let existingItemIndex = this.cartItems.findIndex((item) =>item.product.id === product.id);
    
    if (existingItemIndex !== -1) {
      this.cartItems[existingItemIndex].quantity += quantity;
    } else {
      const newCartItem: CartItem = { product: product, quantity: quantity };
    this.cartItems.push(newCartItem);
    }

  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total,item) => total + (item.product.price * item.quantity), 0);
  }

  getItemCount(): number {
    return this.cartItems.length;
  }

  getItems(): CartItem[] {
    return this.cartItems;
  }

  

  removeFromCart(item: CartItem) {
    const index = this.cartItems.findIndex(cartItem => cartItem.product.id === item.product.id);

    if (index !== 1) {
      this.cartItems.splice(index, 1);
    }
  }

  clearCart(): CartItem[] {
    this.cartItems = [];
    return this.cartItems;
  }

}
