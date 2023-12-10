import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../UserInterface';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{

  user:User = new User()
  userForm!:FormGroup;
  constructor(private userService:UserService, private router:Router,private formBuilder:FormBuilder){}

  ngOnInit(): void 
  {
    this.userForm=this.formBuilder.group({
      name:['',[Validators.minLength(3),Validators.maxLength(10),Validators.required]],
      // age:['',[Validators.min(18),Validators.max(30),Validators.required]],
       birth:['',[Validators.required]],

       email: ['', Validators.compose([Validators.required, Validators.pattern('^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$'), Validators.minLength(1),Validators.required])],
       phone:['',[Validators.minLength(10),Validators.maxLength(10),Validators.required]],
       gender:['',[Validators.required]],
       password:['',[Validators.minLength(3),Validators.maxLength(10),Validators.required]],
       address:['',[Validators.minLength(5),Validators.maxLength(30),Validators.required]],
    })
  }

  get name():FormGroup
  {
    return this.userForm.get("name") as FormGroup
  }

  get birth():FormGroup
  {
    return this.userForm.get("birth") as FormGroup
  }
  get email():FormGroup
  {
    return this.userForm.get("email") as FormGroup
  }
  get phone():FormGroup
  {
    return this.userForm.get("phone") as FormGroup
  }
  get gender():FormGroup
  {
    return this.userForm.get("gender") as FormGroup
  }
  get password():FormGroup
  {
    return this.userForm.get("password") as FormGroup
  }
  get address():FormGroup
  {
    return this.userForm.get("address") as FormGroup
  }
  // userForm = new FormGroup({
  //   name : new FormControl(),
  //   birth : new FormControl(),
  //   email : new FormControl(),
  //   phone : new FormControl(),
  //   gender : new FormControl(),
  //   password : new FormControl(),
  //   address : new FormControl()
  // })
  
  submit(){

   

    console.log(this.userForm.value.email)
    console.log(this.userForm.value.name)
    this.user.name =this.userForm.value.name
    this.user.birth =this.userForm.value.birth
    this.user.email =this.userForm.value.email
    this.user.phone =this.userForm.value.phone
    this.user.gender =this.userForm.value.gender
    this.user.password =this.userForm.value.password
    this.user.address = this.userForm.value.address

    console.log(this.user);

      this.userService.addNewUser(this.user).subscribe(data=>
        {
          // console.log(data)
          if(data)
          {
            alert("registration completed successfully.....!")
            this.router.navigate(['/userlogin'])
           
          }
        })
}
}
