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
  displayFlex :boolean = false;
  cartId: any = [];
  item :number = 0;
  
  constructor(private apiService : ApiServiceService, private cartService : CartserviceService){
    
    this.apiService.getApi().subscribe((data: any) =>{
    console.log(data);
    this.productData = data;
    this.filterData =data;
      
     })
    this.cartService.currentData.subscribe(data => this.item = data.length)
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
  

    addTocart(id : number){
      this.cartService.currentData.subscribe(data => {
        if(data)
        this.cartId = data;
      })
      if(!this.cartId.includes(id)){
        setTimeout(() => {
          this.item = this.cartId.length;
        }, 1000); 
        
        this.cartId.push(id);
        this.cartService.getData(this.cartId);
        this.displayFlex = true;
        setTimeout(() => {
          this.displayFlex = false;
        }, 3000);
      }
    }
  }

