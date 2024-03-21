import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartserviceService {

  private cartdata = new BehaviorSubject<any>(null);
  currentData = this.cartdata.asObservable();
  constructor() { }

  getData(data: number){
  this.cartdata.next(data);
  }
}
