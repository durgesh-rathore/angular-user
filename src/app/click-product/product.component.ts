import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../order.service';
import { ProductService } from '../product.service';
// declare let Razorpay:any;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  pId: any;
  productDescription:string="";
  productImageUrl:any="";
  productPrice:number=0;

  productName:string=""
  total:number=0;
  constructor(private router:ActivatedRoute,private routern:Router,private productser:ProductService,private serve:OrderService) {

  this.pId=this.router.snapshot.paramMap.get('pid');
  this.productser.viewProduct().subscribe(result=>{
    if(result){
      // console.log(result)
      for(let pId1 of result){
          // console.log(pId1)
        if(pId1._id==this.pId){
          this.pId=pId1._id;
          this.productDescription=pId1.productDescription;
          this.productImageUrl=pId1.productImageUrl;

          this.productPrice=pId1.productPrice;
          this.productName=pId1.productName;
          console.log("durgesh"+pId1);

        }
       }
    }

  })

   }


   addToCart(){
    if(localStorage.getItem('admin-id')){
     console.log(localStorage.getItem('admin-id'))
   this.productser.addToCart(this.pId,localStorage.getItem('admin-id')).subscribe(result=>{
     if(result){
       alert("added to cart");
     }
     else
     alert("something went wrong...")
   })
}
else{
 this.routern.navigate(['signin'])
}
}
   
//    RazorPayment(){
//     this.serve.createOrder(this.total).subscribe((result:any)=>{
//       console.log(result);
//       console.log(result.id);
//       var options = {
//         "key": "rzp_test_25KnYfoIcEzVyf", // Enter the Key ID generated from the Dashboard
//         "amount": this.total, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
//         "currency": "INR",
//         "productName": this.productName,
//         "description": "payment Transaction",
//         "image": "https://example.com/your_logo",
//         "order_id": result.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
//         "callback_url": "http://localhost:3000/order-status",
//         "prefill": {
//             "name": "Gaurav Kumar",
//             "email": localStorage.getItem('admin-id'),
//             "contact": "7999950398"
//         },
//         "notes": {
//             "address": this.adress
//         },
//         "theme": {
//             "color": "#3399cc"
//         }
//     };
//     var rzp1 = new Razorpay(options);
//     rzp1.open();

//     })
 

  
   
// }
  
   buyNow(){
      this.routern.navigate(["productBuy",this.pId]);
   }

  ngOnInit():void {
  }

}
