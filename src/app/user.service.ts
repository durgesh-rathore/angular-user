import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

import { Observable } from 'rxjs';
@Injectable()
export class UserService {
apiUrl="https://bookmymeal-api.herokuapp.com/api/admin/signup";
apiUrlin="https://bookmymeal-api.herokuapp.com/api/admin/signin";
  constructor(private Uhttp:HttpClient) {  }
  userapiservice(e:string,p:string):Observable<any>{
    return this.Uhttp.post(this.apiUrl,{email:e,password:p})
  } 
  
  check(e:string,p:string):Observable<any>{
    return this.Uhttp.post(this.apiUrlin,{email:e,password:p})
  }

cheackToken():boolean{
 return  !!!localStorage.getItem('token-jwt');
}
  
}