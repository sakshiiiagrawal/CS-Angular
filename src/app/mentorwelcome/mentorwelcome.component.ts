import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { SearchServiceService } from '../search-service.service';
import { Trainerskill } from '../trainerskill';
import { TrainerskillService } from '../trainerskill.service';
import { Trainerprofile } from '../trainerprofile';
import { TrainerprofileService } from '../trainerprofile.service';
import { Calendar } from '../calendar';
import { CalendarService } from '../calendar.service';

@Component({
  selector: 'app-mentorwelcome',
  templateUrl: './mentorwelcome.component.html',
  styleUrls: ['./mentorwelcome.component.css']
})
export class MentorwelcomeComponent implements OnInit {
  skills: Trainerskill[];
  skill: Trainerskill = new Trainerskill();
  users=sessionStorage.getItem('fname');
  user: Trainerprofile = new Trainerprofile();
  calendars:  Calendar[];
 
    

  constructor(private router: Router, 
    private searchServiceService:SearchServiceService,
    private trainerskillsService: TrainerskillService,
    private trainerprofileService: TrainerprofileService,
    private calendarService: CalendarService){ }
  logout(){
    console.log("in logout");
    this.searchServiceService.logout();
    this.router.navigate(['/homepage']);
  }
  ngOnInit() {
    this.getalluser();
this.getalluser1();
this.getallcalendar();
  }

  getalluser(){
    this.trainerskillsService.getUsers()
    .subscribe( data => {
      this.skills = data;
    });
  }
  deleteUser(skill: Trainerskill): void {
    this.trainerskillsService.deleteUser(skill)
      .subscribe( data => {
        this.skills = this.skills.filter(u => u !== skill);
      })
  };

  createUser(): void {
      this.trainerskillsService.createUser(this.skill)
          .subscribe( data => {
            alert("Skill added successfully.");
            this.getalluser();
          });
         
    };
    getalluser1(){
      this.trainerprofileService.getUsers()
      .subscribe( data => {
        this.user = data;
        console.log(this.user);
      });
    }
    getallcalendar(){
      this.calendarService.getUsers()
      .subscribe( data => {
        this.calendars = data;
      });
    }
}
