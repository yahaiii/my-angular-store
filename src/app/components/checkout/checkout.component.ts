import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  checkoutForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private cartService: CartService
    ) { }

  ngOnInit() {
    this.checkoutForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      zip: new FormControl('', [Validators.required, Validators.pattern('[0-9]{5}')]),
      cardName: new FormControl('', Validators.required),
      cardNumber: new FormControl('', [Validators.required, Validators.pattern('[0-9]{16}')]),
      expiration: new FormControl('', [Validators.required, Validators.pattern('(0[1-9]|1[0-2])\/([0-9]{4})')]),
      cvv: new FormControl('', [Validators.required, Validators.maxLength(3), Validators.pattern('[0-9]{3}')])
    });
  }

  onSubmit() {

    if (this.cartService.getItems().length === 0) {
      alert('Your cart is empty.');
      return;
    }

    alert('Your order has been completed!');

    this.cartService.clearCart();
    this.router.navigate(['/products']);
  }
}
