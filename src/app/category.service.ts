import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Form } from '@angular/forms';

@Injectable()
export class CategoryService {
  
   viewCategory="https://bookmymeal-api.herokuapp.com/api/category/category-list";
  
   public responseCache = new Map();

  constructor(private _http:HttpClient) { }
  
  viewCategoryf():Observable<any>{ 
    const categorysFromCache = this.responseCache.get(this.viewCategory);
    if (categorysFromCache) {
      return of (categorysFromCache);
    }
    const response = this._http.get<any>(this.viewCategory);
    response.subscribe(categorys => this.responseCache.set(this.viewCategory, categorys)
    
    );
   
    return response;
  }
  // deleteCategory(CID:any):Observable<any>{
  //   return this._http.post(this.deletecategory,{id:CID});
  // }
}
