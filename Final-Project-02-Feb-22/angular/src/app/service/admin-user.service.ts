import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminUserService {
 public base_url="http://localhost:3000";
 httpOptions ={
   Headers:new HttpHeaders({'Content-Type':'application/json'})
 }

  constructor(private httpclient:HttpClient) { }
  getUsers() {
    return this.httpclient.get<any>("http://localhost:3000/app/users/")
    .pipe(map((res:any)=>{return res;}))
  }


  delete(id: number):Observable<any>{

    return this.httpclient.delete<any>(`http://localhost:3000/app/users/delete/${id}`)
    
     }
}
