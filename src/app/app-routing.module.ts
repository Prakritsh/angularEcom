import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
  {
    path:"", 
    redirectTo:'login',
    pathMatch:'full'
    },
  {
    path:"login",
    title:"login",
    component: LoginComponent 
    },
  {
    path:"product",
    title:"Home",
    component: ProductComponent },
  {
     path:"cart",
     title:"My cart",
     component: CartComponent
    },
  {
      path:"account",
      title:"Account Setting",
      component: AccountComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
