import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';

import { AuthGuard } from './auth.guard';
import { CategoryproductComponent } from './categoryproduct/categoryproduct.component';
import { ProductComponent } from './click-product/product.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomebackgroundComponent } from './homebackground/homebackground.component';
import { OrderComponent } from './order/order.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductBuyComponent } from './product-buy/product-buy.component';
import { SearchpageComponent } from './searchpage/searchpage.component';
import { ShowCategoryComponent } from './show-category/show-category.component';
import { TodaySpecialComponent } from './today-special/today-special.component';

import { UserSignInComponent } from './user-sign-in/user-sign-in.component';
// import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { ViewCartComponent } from './view-cart/view-cart.component';

const routes: Routes = [
// { path: 'home', component: ShowCateComponent},
// { path: "signup", component: UserSignUpComponent },

 { path: "", component: HomebackgroundComponent },

{ path: "signin", component: UserSignInComponent },
{path:'productdesc/:pid',component:ProductComponent},
{ path: "home", component: HomebackgroundComponent },
 { path: "category", component: ShowCategoryComponent },
 { path: "viewproduct", component: TodaySpecialComponent },
{
  path: "viewcart",
  component: ViewCartComponent,
  //  canActivate:[AuthGuard]
},
{path:'searchproduct/:selement',component:SearchpageComponent},
{path:'productBuy/:pId',component:ProductBuyComponent},

{
  path:"place-order/:uId",
  component:OrderComponent
},
 {
   path: "aboutus",
   component: AboutusComponent
  //  canActivate: [AuthGuard]
 },
 {
   path: "contactus",
   component:ContactusComponent
  //  canActivate: [AuthGuard]
 },
{
  path:"viewCart",
  component:ViewCartComponent,
 canActivate:[AuthGuard]
},
{path:"categorywiseproduct/:cid",component:CategoryproductComponent},
 { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
