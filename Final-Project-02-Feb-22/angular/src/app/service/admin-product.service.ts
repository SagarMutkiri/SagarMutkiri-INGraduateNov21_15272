import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
// import { IProduct } from '../pages/admin-product/IProduct';

@Injectable({
  providedIn: 'root'
})

export class AdminProductService {


  private Products_urls = "http://localhost:3000/app/productlists";
  private Products_find = "http://localhost:3000/app/productlists";
  private Products_add = "http://localhost:3000/app/productlists/add";
  private Products_update = "http://localhost:3000/app/productlists/update/";
  private Products_delete = "http://localhost:3000/app/productlists/delete/";

  httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json'})
  };

  baseUrl='http://localhost:3000/app/productlists/add';

  constructor(private httpclient:HttpClient) { }



  createProduct(Orders: any): Observable<any> {
    return this.httpclient.post(this.baseUrl, Orders);
  }

  delete(id: number):Observable<any>{
    return this.httpclient.delete<any>(`http://localhost:3000/app/productlists/delete/${id}`)
     }

  getProduct(){

    return this.httpclient.get<any>("http://localhost:3000/app/productlists")
    .pipe(map((resp:any)=>{
      return resp;
   }))


 }

}

