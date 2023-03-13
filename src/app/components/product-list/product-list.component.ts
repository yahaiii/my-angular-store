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


  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });

    console.log(this.products);
  }



  // addToCart(item: Product): void {
  //   this.products.push(item);
  //   alert('Added to cart!');

  //   console.log(this.products);

  // }
  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }



}
