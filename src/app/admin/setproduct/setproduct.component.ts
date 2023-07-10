import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setproduct',
  templateUrl: './setproduct.component.html',
  styleUrls: ['./setproduct.component.css']
})
export class SetproductComponent implements OnInit{

  toggleField: string = '';

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
