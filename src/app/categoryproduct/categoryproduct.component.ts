import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-categoryproduct',
  templateUrl: './categoryproduct.component.html',
  styleUrls: ['./categoryproduct.component.css']
})
export class CategoryproductComponent implements OnInit {
  cid:any;
  productList:any[]=[];
  
  constructor(private route:Router,private activeRoute:ActivatedRoute,private product:ProductService) { 
    this.cid=this.activeRoute.snapshot.paramMap.get('cid');
    console.log("category id"+this.cid);
    this.product.viewProduct().subscribe(result=>{
      for(let resultp of result){
         if(this.cid==resultp.categoryId._id){
           this.productList.push(resultp);
         }
      }
      // this.productList=result;
      console.log("productList")
       console.log(this.productList);
    })
  }
  productDesc(pId:any){
    this.route.navigate(['productdesc',pId])
  }
  addToCartHtml(pId:any){
    if(localStorage.getItem('admin-id')){
     console.log(localStorage.getItem('admin-id'))
   this.product.addToCart(pId,localStorage.getItem('admin-id')).subscribe(result=>{
     if(result){
       alert("added to cart");
     }
     else
     alert("something went wrong...")
   })
}
else{
 this.route.navigate(['signin'])
}
}

  ngOnInit(): void {
  }

}
