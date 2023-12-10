import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit {
  constructor(private userService:UserService){}

  users:any
  ngOnInit(): void {
    this.userService.getAllUser().subscribe(value => this.users=value)
  }


  deleteUser(id:number)
  {
    this.userService.deleteUser(id).subscribe(value=>
      {
        console.log(value)
        if(value==null)
        {
          window.location.reload();
        }
      })
    
  }
  
}
