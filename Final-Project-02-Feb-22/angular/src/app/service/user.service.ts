import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
//  baseUrl='http://localhost:3000/app'
url="http://localhost:3000/app/users";

  constructor(private httpclient:HttpClient) { }


//registeration
  // createUsers(user:any){
  //   return this.httpclient.post(`${this.baseUrl}/users/add`,user)
  // }
  
//login
// getUsers(user:any){
//     return this.httpclient.get(`${this.baseUrl}/users/login`,user)
//   }

   getUsers():Observable <any>
  {
    return this.httpclient.get<any>('http://localhost:3000/app/users');
    }

    addUsers(firstName:string,lastName:string,emailAdd:string,phoneNo:number,address:string,password:string,confirmPassword:string){

      const user={firstName:firstName,lastName:lastName,emailAdd:emailAdd,phoneNo:phoneNo,address:address,password:password,confirmPassword:confirmPassword};
      console.log(user);
      this.httpclient.post('http://localhost:3000/app/users/add',user).subscribe(data=>{
  
        console.log(data);
  
      })
  
     }
}
