import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { CartService } from '../../services/cart.service';
import Swal from 'sweetalert2';


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
      name: new FormControl('', [Validators.required, Validators.minLength(5),]),
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
      // alert('Your cart is empty.');
      Swal.fire({
        icon: 'warning',
        title: 'Your cart is empty',
        text: 'Please add items to your cart before checking out',
        confirmButtonText: 'OK'
      });
      return;
    }

    // alert('Your order has been completed!');

    Swal.fire({
      icon: 'success',
      title: 'Order completed!',
      text: 'Thank you for your purchase.',
      confirmButtonText: 'OK'
    });

    this.cartService.clearCart();
    this.router.navigate(['/']);
  }
}

