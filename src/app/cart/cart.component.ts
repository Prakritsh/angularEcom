import { Component } from '@angular/core';
import { CartserviceService } from '../service/cartservice.service';
import { ApiServiceService } from '../service/api-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  productId: any = [];
  tempData : any = [];
  cartData: any = [] ;
  price :number=0;
  quantity: number=1;
  quantityPrice :number [] = [] ;
  
constructor(private cartService : CartserviceService , private apiService: ApiServiceService){
  //inheriting the productID added to cart
  this.cartService.currentData.subscribe((data) => {
    this.productId = data;
  })
  if(this.productId){
    //call api
  this.apiService.getApi().subscribe((data:any)=>{
    for(let i = 0 ; i<this.productId.length ;i++ ){
      let tempData: any = data.filter((data: any) =>data.id === this.productId[i]);
      
        this.cartData.push(...tempData);
        this.cartData.forEach((item: { quantity: number; }) => {
          item.quantity = 1; // Set initial quantity (you can set any initial value here)
        });
      
        this.price =Math.round(this.price + this.cartData[i].price * this.cartData[i].quantity) ;
        }
      });
      
}
}


//Delete function 
remove(id: number){
  this.cartData = this.cartData.filter((data:any)=> {
  if(data.id != id){
    return data;
  }else{
    this.subtract(data.price, data.quantity);
  }
  });
  this.productId = this.productId.filter((data:any) => data != id);
  this.cartService.getData(this.productId);
  console.log("removed?");
}
//subtracting price 
subtract(price: number , q :number=1){
  console.log("number of quantit dlted"+q);
  this.price = this.price - price * q;
  this.price = Math.round(this.price);
  console.log(this.price);
  this.check(this.price);
}
//adding price
addtot(price: number){
  this.price = this.price + price;
  this.price = Math.round(this.price);
  console.log(this.price);
  this.check(this.price);
}

//'-' btn clicked 
reduce(id :number){
  this.cartData.every((item: any) => {
    if(item.id == id){
      item.quantity --;
      
      if(item.quantity < 1){
        item.quantity = 1 ;
        return false;
      }
      this.subtract(item.price);
      
      return true;
    }else{
      return true;
    }
  })
}

//'+' btn clicked
add(id :number, ){
  this.cartData.every((item: any) => {
  if(item.id == id){
    item.quantity ++;
    if(item.quantity > 6){
      item.quantity = 6 ;
      alert("limit reached");
      return false;
    }
    this.addtot(item.price);
    return true;
  }else{
    return true;
  }
})
}
//check price is in -ve as math round will not read decial value
check(price: number){
  if(price < 0){
    this.price = 0;
  }
}
}
