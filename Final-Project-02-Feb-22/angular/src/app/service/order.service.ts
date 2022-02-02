import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map, Observable } from 'rxjs';
// const baseUrl = 'http://localhost:3000/app';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  
  
  

baseUrl='http://localhost:3000/app/orders/add';

order_delete='http://localhost:3000/app/orders/delete/';
httpOptions = {

headers: new HttpHeaders({ 'Content-Type': 'application/json' })

 };
  constructor(private httpclient:HttpClient) { }

  
  createOrder(Orders: any): Observable<any> {
    return this.httpclient.post(this.baseUrl, Orders);
  }
 
  

  }
