import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import {FormControl, FormGroup, FormBuilder, Validators, NgForm} from '@angular/forms';
import { SearchServiceService } from '../search-service.service';
import { Searchmodel } from '../searchmodel';




@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  
  constructor(private router: Router, private formBuild:FormBuilder, private service:SearchServiceService) { }

  RegisterForm: FormGroup;
  registerUser() {
    this.service.signupUser(this.RegisterForm.value).subscribe(result => {
      if(result){
        console.log(result);
        
        this.router.navigate(['/userlogin']);
        alert("Registered successfully.");
        // this.router.navigate(['/userlogin']);
      }
    })
  }

  LoginForm: FormGroup;
  authenticateUser():void{
    this.service.loginUser(this.LoginForm.value.username,this.LoginForm.value.password).subscribe(result => {
      // if(result==null)
			// {
			// 	alert("Incorrect Credentials!");
			// }

     
    })
  }


  ngOnInit() {

this.RegisterForm=this.formBuild.group({
  username:['',Validators.required],
  password:['',Validators.required],
  reppassword:['',Validators.required],
  firstname:['',Validators.required],
  lastname:['',Validators.required],
  emailid:['',Validators.required],
  contactnumber:['',Validators.required],
  role:['user']
})

this.LoginForm=this.formBuild.group({
  username:['',Validators.required],
  password:['',Validators.required]
})


  };


}
