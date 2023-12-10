import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent {

  constructor( private userService:UserService, private router:Router){}
 
  userForm = new FormGroup({
    email : new FormControl(),
    password : new FormControl(),
  })

    
  users:any
  ngOnInit(): void {
    this.userService.getAllUser().subscribe(value => this.users=value)
  }

 

  submitData(){
    var user;
    var number = 0;
    for ( user of this.users) {

      if("admin@gmail.com"==this.userForm.value.email && "admin" ==  this.userForm.value.password){
              this.router.navigate(['/allusers'])
              number++;
              break;
      }
      else if(user.email ==  this.userForm.value.email && user.password ==  this.userForm.value.password ){
        
          this.userService.getUserById(user.id);
        //  console.log(this.userForm.value.email)
         this.router.navigate(['/viewuser'])
         number++;
         break;
    }else{
    
    }


    }
 
  if(0>=number){
    alert("wrong password....!");
  }

  }


}
