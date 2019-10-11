import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AdminloginService} from '../adminlogin.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  username=''
	password=''

  constructor(private router: Router, private adminloginService: AdminloginService) { }
	authenticate(): void{
		if(this.adminloginService.authenticate(this.username,this.password))
			{ this.router.navigate(['adminwelcome']);
			 localStorage.setItem('username',"Admin");
	}
			 else
			alert("Incorrect credentials!");
	}
  ngOnInit() {
  }

}
