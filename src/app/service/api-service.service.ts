import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http : HttpClient) { }
  getApi(){
    return this.http.get('https://fakestoreapi.com/products');
  }
}
