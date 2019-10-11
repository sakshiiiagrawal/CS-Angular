import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { SearchServiceService } from '../search-service.service';
import { Trainerprofile } from '../trainerprofile';
import { TrainerprofileService } from '../trainerprofile.service';
import { Adminadd } from '../adminadd';
import { AdminaddService } from '../adminadd.service';

@Component({
  selector: 'app-userwelcome',
  templateUrl: './userwelcome.component.html',
  styleUrls: ['./userwelcome.component.css']
})
export class UserwelcomeComponent{
  techs: Adminadd[];
  tech: Adminadd = new Adminadd();
  user: Trainerprofile = new Trainerprofile();
    constructor(private router: Router, 
      private searchServiceService:SearchServiceService,
      private trainerprofileService: TrainerprofileService,
      private adminaddService: AdminaddService){ }
    logout(){
      console.log("in logout");
      this.searchServiceService.logout();
      this.router.navigate(['/homepage']);
    }


    ngOnInit() {
this.getalluser1();
this.getAlltechs();
      };

      
      getalluser1(){
        this.trainerprofileService.getUsers()
        .subscribe( data => {
          this.user = data;
          console.log(this.user);
        });
      }

      getAlltechs(){
        this.adminaddService.getUsers()
          .subscribe( data => {
            this.techs = data;
          });
      }
}