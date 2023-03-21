import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartCount!: number;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartCount = this.cartService.getItemCount();
  }


}
