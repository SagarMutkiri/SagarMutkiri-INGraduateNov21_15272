import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminOrderServiceService {
  baseUrl='http://localhost:3000/app/orders/add';

  baseUrldelete='http://localhost:3000/app/orders/';

order_delete='http://localhost:3000/app/orders/delete/';

httpOptions = {



headers: new HttpHeaders({ 'Content-Type': 'application/json' })



 };
 constructor(private httpclient:HttpClient) { }





  getOrders(){

    return this.httpclient.get<any>("http://localhost:3000/app/orders")

    .pipe(map((resp:any)=>{

      return resp;

   }))

 }



 delete(id: number):Observable<any>{

return this.httpclient.delete<any>(`http://localhost:3000/app/orders/delete/${id}`)

 }}
