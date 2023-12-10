import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';
import { FormsModule } from '@angular/forms';
import { Routes ,RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { UserloginComponent } from './userlogin/userlogin.component';
import { RegistrationComponent } from './registration/registration.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import {HttpClientModule} from '@angular/common/http';
import { UserService } from './user.service';
import { AllusersComponent } from './allusers/allusers.component';



const routes: Routes=[
  { path: '', redirectTo: '/showbook', pathMatch: 'full' }, 
  {
    path:"showbook",
    component:CardComponent
},
  {
      path:"userlogin",
      component:UserloginComponent
  },
  {
    path:"registation",
    component:RegistrationComponent
  },
  {
    path:"viewuser",
    component:ViewuserComponent
  },
  {
    path:"allusers",
    component:AllusersComponent
  }
  ]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
    RegistrationComponent,
    ViewuserComponent,
    UserloginComponent,
    AllusersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,RouterModule.forRoot(routes),ReactiveFormsModule,HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
