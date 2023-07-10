import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BackendService {

  getCartTotal(): Observable<number>{
    /*let fakeResponse = "10";
    return Observable.create(
      observer => {
        setTimeout(() =>{
          observer.next(fakeResponse)
        },2000)
      }
    )*/
    const cartTotal = 0;

    return of(cartTotal);
  }
  


  }

