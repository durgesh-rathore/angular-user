import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable(
)
export class ProductService {
  viewProductUrl = "https://angularapi-api.herokuapp.com/api/product/product-list";
  cartUrl = "https://angularapi-api.herokuapp.com/api/cart/addtocart";
  searchUrl="http://localhost:3000/api/search";
  public responseCache = new Map();
  constructor(private _http: HttpClient) {
  }

  productsFromCache: any;
  viewProduct(): Observable<any> {
    this.productsFromCache = this.responseCache.get(this.viewProductUrl);
    if (this.productsFromCache) {
      return of(this.productsFromCache);
    }
    const response = this._http.get<any>(this.viewProductUrl);
    response.subscribe(products => this.responseCache.set(this.viewProductUrl, products)
    );
    return response;
  }
  addToCart(pId: any, uId: any): Observable<any> {
    console.log(pId + "+" + uId);
    return this._http.post(this.cartUrl, { userId: uId, productId: pId })
  }
  searchProduct(name:any):Observable<any>{
   return this._http.post(this.searchUrl,{sname:name});
  }
}
