import { Component, OnInit } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { UsersService } from 'src/app/service/user.service';
import * as CryptoJS from 'crypto-js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any;
  users:[]=[];
  login!: string;

  constructor(private usersService:UsersService,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    // const user = {

    //   emailAdd:form.value.email,
    //   password:form.value.password

    // }

    const emailAdd=form.value.email;
    const password=form.value.password;

    this.usersService.getUsers().subscribe(data=>{

      console.log(data);

      this.users=(data);

     this.users.forEach((_element: any) => {

        if(_element.emailAdd===emailAdd && _element.password===password){

          console.log(_element.emailAdd);

          this.login="success";

          this.router.navigate(['home'])

        }

        else{

          this.login="Invalid username name"



        }

      });



    });

    // console.log(CryptoJS.AES.encrypt( this.form.value.email, "email").toString()); //email
    // console.log(CryptoJS.AES.encrypt( this.form.value.password, "password").toString()); //password


  }
}
