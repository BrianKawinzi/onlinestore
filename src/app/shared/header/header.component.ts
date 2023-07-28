import { NumberInput } from '@angular/cdk/coercion';
import { Component, OnInit, Input } from '@angular/core';

import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() pageTitle: string = '';
  @Input() iconTitle: string = '';
  @Input() helpTitle: string = '';

  counter = 0;

  userStatusColor = "warn";



  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.counter = this.cartService.getCartItemCount();
  }




}


