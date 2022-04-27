import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  viewCartUrl = "https://bookmymeal-api.herokuapp.com/api/cart/viewcart"
  removeFromeCartUrl = "https://bookmymeal-api.herokuapp.com/api/cart/removefromcart"
  // public responseCache = new Map();
  
  constructor(private _http: HttpClient) { }
  
  viewCart(userId: any): Observable<any> {
    return this._http.post(this.viewCartUrl, { userId });
  }



  // cartFromCache: any;
  // viewCart(): Observable<any> {
  //   this.cartFromCache = this.responseCache.get(this.viewCartUrl);
  //   if (this.cartFromCache) {
  //     return of(this.cartFromCache);
  //   }
  //   const response = this._http.get<any>(this.viewCartUrl);
  //   response.subscribe(cart => this.responseCache.set(this.viewCartUrl, cart)
  //   );
  //   return response;
  // }

  removeFromCart(pId: any, uId: any) {
    return this._http.post(this.removeFromeCartUrl, { userId: uId, pId: pId })
  }

}

