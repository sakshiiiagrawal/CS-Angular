import { Component, OnInit } from '@angular/core';
// import { Userloginmodal } from './userloginmodal';
// import { UserloginServiceService } from './userlogin-service.service';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent /*implements OnInit*/ {
  // title = 'MentorOnDemand';

  // users:Userloginmodal[]; 
  // user:Userloginmodal[];

  constructor(/*private service:UserloginServiceService, 
    private http:HttpClient*/){}

ngOnInit(): void {

// this.user = [
// {id:2, firstname:'Nelson-003', lastname:'pol'}
// ];  

// this.service.save(this.user[0]);

// this.service.getAllUserSpringBoot().subscribe( data => {
// this.users = data.body;
// console.log(">>>>>>>>>>>>>>>>>>>>>> usersSB ::: "+this.users); // this calling Spring boot api , working

// });
}
}
