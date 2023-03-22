import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/models/cart-item.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService, private route: Router) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getItems();
    this.totalPrice = this.cartService.getTotalPrice();
  }

  removeFromCart(item: CartItem): void {
    this.cartService.removeFromCart(item);

    Swal.fire({
      icon: 'warning',
      title: 'Item removed!',
      text: `You have successfully it from the cart`,
      confirmButtonText: 'OK'
    });

  }

  getItemTotal(item: CartItem, quantity: number): number {
    return (item.product.price * quantity); 
  }

  getCartTotal(): number {
    return this.cartService.getTotalPrice();
  }

}
