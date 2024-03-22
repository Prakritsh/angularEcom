import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  minDate: string;
  @Output() event = new EventEmitter<boolean>();
  constructor() {
    // Initialize minDate with today's date
    const today = new Date();
    this.minDate = today.toISOString().split('T')[0]; // Format as 'yyyy-mm-dd'
  }
  close(): void {
    this.event.emit();
  }
  sucess(){
    alert("Payment Is Complete. Thank you for Choosing Us");
  }
}
