import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

 import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { UserService } from '../user.service';
// import {SocialAuthService,GoogleLoginProvider} from "angularx-social-login"


@Component({
  selector: 'app-user-sign-in',
  templateUrl: './user-sign-in.component.html',
  styleUrls: ['./user-sign-in.component.css']
})
export class UserSignInComponent implements OnInit {
   userEmail="";
   userPassword="";

  constructor(private _service:UserService,private router:Router,private social:SocialAuthService ) { }

  userSignIn(){
    this._service.check(this.userEmail,this.userPassword).subscribe(result=>{
      if(result){
        console.log(result);
        localStorage.setItem('admin-id',result.current_user._id);
        localStorage.setItem('emailuser',result.current_user.email);
        localStorage.setItem('token-jwt',result.token);
        alert("your login sucessfull");
        this.router.navigate(['home']);
      }
        else
        alert("your login failed");
    });
  }

  signinWithGoogle(){
    this.social.signIn(GoogleLoginProvider.PROVIDER_ID)
    this.social.authState.subscribe(data=>{
      console.log(data)
      console.log(data.email);
      this.router.navigate(['home']);
    })
  }


  userSignUp(){
    this._service.userapiservice(this.userEmail,this.userPassword).subscribe(result=>{
      if(result){
       alert("Registration Successfull");
      //  this.router.navigate(['signin']);
      }
       else
       alert("Registration Failed");
    })

  }

  ngOnInit(): void {
  }

}
