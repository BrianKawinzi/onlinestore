import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setproduct',
  templateUrl: './setproduct.component.html',
  styleUrls: ['./setproduct.component.css']
})
export class SetproductComponent implements OnInit{

  toggleField: string = '';

  getFilterData(formData: any) {
    // Your code logic here
    // Process the filter data
  }
  
  getData() {
    // Your code logic here
    // Perform the necessary data retrieval
  }
  

  constructor() { }

  ngOnInit() {
    this.toggleField = "searchMode";
  }

  toggle(filter?: string) {
    if (!filter) {
      filter = "searchMode";
    }
    this.toggleField = filter;
  }
  

}
