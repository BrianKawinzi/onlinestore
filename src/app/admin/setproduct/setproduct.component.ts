import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-setproduct',
  templateUrl: './setproduct.component.html',
  styleUrls: ['./setproduct.component.css']
})
export class SetproductComponent implements OnInit{

  errorMessage: string = '';


  toggleField: string = '';

  getFilterData(formData: any) {
    // Your code logic here
    // Process the filter data
  }
  
  getData() {
    // Your code logic here
    // Perform the necessary data retrieval
  }
  updateData(formData: any) {
    // Your code logic here
    // Update the data using the form values
  }
  myDocData: any; // Replace 'any' with the appropriate type of data you are expecting
  addDataForm: any; // Replace 'any' with the appropriate type of data or form group you are using



  setData(formData: any) {
    // Your code logic here
    // Set the data using the form values
  }
  savedChanges: boolean = false;

  error: boolean = false;

  dataLoading: boolean = false;


  

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
