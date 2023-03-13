/**

This component represents the product list of the e-commerce application.
It displays a list of products and allows the user to add them to the cart.

*/

import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product.model';


@Component({
  
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  quantity: number = 1;

  // Inject services into constructor
  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    // Retrieve products from ProductService
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });

    console.log(this.products);
  }

  // Method to add product to cart
  addToCart(product: Product, qty: string): void {
    const quantity = parseInt(qty);
    // Call addToCart() method from CartService
    this.cartService.addToCart(product, quantity);

    alert(`${qty} ${product.name} added to the cart!`);
  }



}
