import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  constructor(private userService:UserService){
    
  }

  //add to cart
 
  cartValue=0;
  ngOnInit(): void {
    this.userService.getcartValue().subscribe(val=>this.cartValue=val)
  }


  // userLogin(){
  //   this.router.navigate(['/updateuser'])
  // }
}
