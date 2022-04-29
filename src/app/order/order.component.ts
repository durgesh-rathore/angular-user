import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { parse } from 'path';
import { CartService } from '../cart.service';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  // productId:any="";
  productQty:number=0;
  producttotal:number=0;
  // productDiscount:number=0;
  productPrice:number=0;
  mobile:string="";
  address:string="";
  city:string="";
  // productName:string="";
  uId: any;
  total:number=0;
  cartList: any;
  productList:any;
  // itemList:any;
  grandTotal:number = 0;
  constructor(private cart:CartService,private orderservice:OrderService,private router:ActivatedRoute) {
  // constructor(private router:ActivatedRoute,private cs:CategoryService) {
    // this.cid=this.router.snapshot.paramMap.get('cid')
    this.uId=this.router.snapshot.paramMap.get('uId')
    this.cart.viewCart(localStorage.getItem('admin-id')).subscribe(result=>{
      if(result){
        console.log(result+"   -----------------------------hello");
        //  this.cartList=result.productId; 
        //  localStorage.setItem('cart-product',JSON.stringify(result.productId));

        //  this.cartList=JSON.parse(localStorage.getItem('cart-product')||'[]');
        //  console.log("cartList data ");
        //  console.log(this.cartList);
         for(let cartObject of result.productId){
            this.grandTotal +=cartObject.productPrice;
            console.log(cartObject);
            cartObject.product2Qty=1;
            cartObject.perTotal=cartObject.productPrice*1;
            console.log("QTY"+cartObject.product2Qty);
        }

        localStorage.setItem('cart-product',JSON.stringify(result.productId))
        this.cartList=JSON.parse(localStorage.getItem('cart-product')|| '[]');
        console.log(this.cartList);
      }

      else
      alert("cart not found")
  })
  }
 QtyInput(event:any,i:any){
   console.log(event.target.value);
  this.productQty=event.target.value;
    this.cartList[i].product2Qty = event.target.value;
    this.cartList[i].perTotal=event.target.value*this.cartList[i].productPrice;
    console.log(this.cartList[i].perTotal + "perTotal price");
    localStorage.setItem('cart-product',JSON.stringify(this.cartList));
  let itemList = JSON.parse(localStorage.getItem('cart-product')||'[]');
  this.grandTotal = 0
    for(let item of itemList){
      this.grandTotal = this.grandTotal+item.perTotal;
    }
 }
    placeOrderHtml(){
      // let formdata=new FormData();

      this.orderservice.placeOrder(this.address,this.city,this.mobile,this.uId,this.cartList).subscribe(result=>{
        if(result)
        alert("place Ordered");
        else
        alert("Failed to Place Ordered");
      })
    }
  ngOnInit(): void {
  }


}
