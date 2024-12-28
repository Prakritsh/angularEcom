import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { AccountComponent } from './account/account.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RouteGaurdService } from './routingService/route-gaurd.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MenuForComponent } from './menu-for/menu-for.component';

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
    component: ProductComponent,canActivate:[RouteGaurdService]
  },
  {
     path:"cart",
     title:"My cart",
     component: CartComponent,canActivate:[RouteGaurdService],
    },
  {
      path:"account",
      title:"Account Setting",
      component: AccountComponent,
    },
    {
      path:"checkout",
      title:"Checkout",
      component:CheckoutComponent,canActivate:[RouteGaurdService],
    },
    {
      path:'admin',
      loadChildren:()=> import('./admin/admin.module').then(mod=>mod.AdminModule),
    },
    {
      path:"menu/:subpath",
      title:"MENU",
      component: MenuForComponent,
     },
    {
      path: '**',
      component: PageNotFoundComponent,
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
