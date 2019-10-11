import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Adminadd } from '../adminadd';
import { AdminaddService } from '../adminadd.service';
import { Adminblock } from '../adminblock';
import { AdminblockService } from '../adminblock.service';
import { SearchServiceService } from '../search-service.service';

// import { userInfo } from 'os';
import {FormControl, FormGroup, FormBuilder, Validators, NgForm} from '@angular/forms';
@Component({
  selector: 'app-adminwelcome',
  templateUrl: './adminwelcome.component.html',
  styleUrls: ['./adminwelcome.component.css']
})
export class AdminwelcomeComponent implements OnInit {
  techs: any = [];
  tech: Adminadd = new Adminadd();
  signup: Adminblock[];
  constructor(private router: Router, private adminaddService: AdminaddService, 
    private adminblockService: AdminblockService,
    private searchServiceService:SearchServiceService,private formBuild:FormBuilder) { }
  logout(){
    console.log("in logout");
    this.searchServiceService.logout();
    this.router.navigate(['/homepage']);
  }
  fees: FormGroup;
  ngOnInit() {
    this.getAlltechs();
    this.getAlluser();

    this.fees=this.formBuild.group({
      price:['',Validators.required]
   
    })
    };

    getAlltechs(){
      this.adminaddService.getUsers()
        .subscribe( data => {
          this.techs = data;
          console.log(this.techs);
        });
    }
  
    deleteUser(tech: Adminadd): void {
      this.adminaddService.deleteUser(tech)
        .subscribe( data => {
          this.techs = this.techs.filter(u => u !== tech);
        })
    };

   

      createUser(): void {
        console.log("here"+this.tech);
        this.adminaddService.createUser(this.tech)
            .subscribe( data => {

              alert("Technology added successfully.");
              this.getAlltechs();
            });
    
      };

      updateUser(tech: any): void {
tech.price =this.fees.get('price').value;
console.log(tech);
console.log("heloooooooooo"+tech.price+tech.techname);
        this.adminaddService.updateUser(tech)
            .subscribe( data => {
              alert("Fee edited successfully.");
this.getAlltechs();
            });
    
      };


      // add/block user/mentor!!!!!!!!!!!!!!!!!!!!!!
      getAlluser(){
        this.adminblockService.getUsers()
        .subscribe( data => {
          this.signup = data;
          });
      }

      deleteUser1(user: Adminblock): void {
        this.adminblockService.deleteUser1(user)
        .subscribe( data => {
            this.signup = this.signup.filter(u => u !== user);
          })
        
      }
    
  };

  


