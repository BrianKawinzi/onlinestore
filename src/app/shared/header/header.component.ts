import { NumberInput } from '@angular/cdk/coercion';
import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
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
  searchKeyword: string = '';

  counter = 0;

  userStatusColor = "warn";



  constructor(private searchService: SearchService) { }

  performSearch() {
    const results = this.searchService.searchProducts(this.searchKeyword);
    console.log('Search results:', results);
  }




}


