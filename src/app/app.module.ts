import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { AccountComponent } from './account/account.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RouteGaurdService } from './routingService/route-gaurd.service';
import { AuthServiceService } from './routingService/auth-service.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MenuForComponent } from './menu-for/menu-for.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatButtonModule} from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MenuDialogComponent } from './menu-dialog/menu-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    LoginComponent,
    NavbarComponent,
    CartComponent,
    AccountComponent,
    CheckoutComponent,
    PageNotFoundComponent,
    MenuForComponent,
    MenuDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterOutlet,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule, 
    BrowserAnimationsModule,
   MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule
  ],
  exports: [NavbarComponent],
  providers: [
    provideClientHydration(),
    RouteGaurdService,
    AuthServiceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
