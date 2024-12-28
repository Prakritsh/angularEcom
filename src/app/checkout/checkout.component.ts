import { Component, EventEmitter, Output } from '@angular/core';
import { CartserviceService } from '../service/cartservice.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  minDate: string;
  @Output() event = new EventEmitter<boolean>();
  constructor(private cartService : CartserviceService) {

    const today = new Date();
    this.minDate = today.toISOString().split('T')[0]; 
  }
  close(): void {
    this.event.emit();
  }
  
  sucess(){
    alert("Payment Is Complete. Thank you for Choosing Us");
    this.cartService.clearData();
  }
}
