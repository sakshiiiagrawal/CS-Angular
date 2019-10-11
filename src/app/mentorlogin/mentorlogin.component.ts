import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import {FormControl, FormGroup, FormBuilder, Validators, NgForm} from '@angular/forms';
import { SearchServiceService } from '../search-service.service';
import { Searchmodel } from '../searchmodel';

@Component({
  selector: 'app-mentorlogin',
  templateUrl: './mentorlogin.component.html',
  styleUrls: ['./mentorlogin.component.css']
})
export class MentorloginComponent implements OnInit {

  constructor(private router: Router, private formBuild:FormBuilder, private service:SearchServiceService) { }
  RegisterForm: FormGroup;
  registerMentor() {
    // console.log("hello"+this.RegisterForm.value.username);
    this.service.signupMentor(this.RegisterForm.value).subscribe(result => {
      if(result){
        console.log(result);
        this.router.navigate(['/mentorlogin']);
      }
    })
  }

  LoginForm: FormGroup;
  authenticateMentor(){
    this.service.loginMentor(this.LoginForm.value.username,this.LoginForm.value.password).subscribe(result => {

      
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
      linkedinurl:['',Validators.required],
      yearsofexperience:['',Validators.required],
      role:['mentor']
    })

    this.LoginForm=this.formBuild.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })
  };

}
