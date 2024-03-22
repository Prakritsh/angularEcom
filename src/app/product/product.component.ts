import { Component } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';
import { CartserviceService } from '../service/cartservice.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  productData:any  = [];
  filterData:any = [];
  cartData : any = [];
  constructor(private apiService : ApiServiceService, private cartService : CartserviceService){
    
    this.apiService.getApi().subscribe((data: any) =>{
    console.log(data);
    // return data;
  
    this.productData = data;
    this.filterData =data;
     })
    }
    category(cat : string){
      cat = cat.toLocaleLowerCase();
      switch(cat){
        case 'men':
          
          this.filterData = this.productData.filter((data :any) => data.category == "men's clothing");
          break;
          case 'jewelery':
            this.filterData = this.productData.filter((data :any) => data.category === 'jewelery');
            break;
            case 'electronics':
             
              this.filterData = this.productData.filter((data :any) => data.category === 'electronics');
              break;
              case 'women':
             
                this.filterData = this.productData.filter((data :any) => data.category ===  "women's clothing");
                break;
                case 'others':
           
                  this.filterData = this.productData;
                  break;
         default :
         this.filterData = this.productData;
         break;
      }

    }
    displayFlex :boolean = false;
    cartId: any = [];
    item :number = 0;

    addTocart(id : number){
   

      let cartid = id ;
      if(!this.cartId.includes(cartid)){
        setTimeout(() => {
          this.item++
        }, 1000); 
        this.cartId.push(cartid);
        this.cartService.getData(this.cartId);
        this.displayFlex = true;
        setTimeout(() => {
          this.displayFlex = false;
        }, 3000);
      }
       

    }

  }

