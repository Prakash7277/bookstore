
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {
  constructor(private userService:UserService, private activeRoute:ActivatedRoute){}

  id = +this.activeRoute.snapshot.paramMap.get('id')!

  users:any

  ngOnInit(): void {
    // console.log("vi = " +this.id)
    // this.userService.getUserById(this.id).subscribe(data => console.log(data))
    // this.userService.getUserById(this.id).subscribe(value => this.users=value)
   
this.userService.getAllUser().subscribe(value => this.users=value)
        
  }

}
