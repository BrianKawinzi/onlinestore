import { NumberInput } from '@angular/cdk/coercion';
import { Component, OnInit, Input } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  @Input() pageTitle: string = '';
  @Input() iconTitle: string = '';
  @Input() helpTitle: string = '';

  counter = 0;

  userStatusColor = "warn";


  constructor(private _backendservice: BackendService) {}


  ngOnInit() { 
    this.counter = 0;
    this._backendservice.getCartTotal().subscribe(
      (res: NumberInput) => {
        this.counter = Number(res);
      },
      (error: any) => {

      }
      );

      this._backendservice.getUserStatus().subscribe((res: boolean) => {
        this.userStatusColor = res ? "primary" : "warn";
      }, (error: any) => {
        // Handle the error if necessary
      });
      
    
  }
    
  }


