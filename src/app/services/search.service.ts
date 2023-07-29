import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }
  // method to perform the search
  searchProducts(keyword: string): string[] {
    //Replace this with your actual search logic
    // For demonstration purposes, we'll return mock data
    const mockProducts: string[] = ['Product 1', 'Product 2', 'Product 3', 'Product 4'];
    return mockProducts.filter(product => product.toLowerCase().includes(keyword.toLowerCase()));
  }
}
