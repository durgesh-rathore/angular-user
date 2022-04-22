import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-usernavigation',
  templateUrl: './usernavigation.component.html',
  styleUrls: ['./usernavigation.component.css']
})
export class UsernavigationComponent implements OnInit {
  selement:any="";
  constructor(private router:Router,private _service:UserService) { }
  cheackTokenHtml(){
    return this._service.cheackToken();
  }
  signOut(){
    localStorage.removeItem('token-jwt');
  }
  search(){
    console.log("in search box"+this.selement);
   this.router.navigate(['searchproduct',this.selement]);
   console.log("bellow search box");
  }
  ngOnInit(): void {
  }

}
