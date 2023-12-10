import { Injectable } from '@angular/core';
import {  User, UserInterface } from './UserInterface';
import { HttpClient } from '@angular/common/http';

import { __values } from 'tslib';
import { Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UserService {

 
  constructor( private httpClient:HttpClient) { }

  //add to cart
  private cartvalue: number=0;
  private cartvalue$=new Subject<number>();
  addTocart(){
    this.cartvalue++;
  return this.cartvalue$.next(this.cartvalue);


  }

  getcartValue(){
    return this.cartvalue$;
   
  
  }


  addNewUser(user :User){

    
    console.log(user);
    const headers ={'Content-Type':'application/json'}
   return this.httpClient.post("https://book-api-production-4273.up.railway.app/v1/api/users",user,{'headers':headers});
    
  }

  getAllUser(){
    return this.httpClient.get<UserInterface>("https://book-api-production-4273.up.railway.app/v1/api/users")
  }


  
  getUserById(id:number)
  { 
    console.log(id)
    return this.httpClient.get<UserInterface>(`https://book-api-production-4273.up.railway.app/v1/api/users/${id}`)
  }

  deleteUser(id:number)
  {
      return this.httpClient.delete(`https://book-api-production-4273.up.railway.app/v1/api/users/${id}`)
  }

}
