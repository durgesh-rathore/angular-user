import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.css']
})
export class SearchpageComponent implements OnInit {
  names:any="";
  productList:any;
  constructor(private routera:ActivatedRoute,private product:ProductService,private route:Router) {
    this.names=this.routera.snapshot.paramMap.get('selement');
    console.log(this.names);
    this.product.searchProduct(this.names).subscribe(result=>{
      if(result){
      console.log(result)
      this.productList=result;
    }
      else
      alert("No find Product")
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
