import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { RouterModule, Routes } from '@angular/router';
import { MentorloginComponent } from './mentorlogin/mentorlogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { UserwelcomeComponent } from './userwelcome/userwelcome.component';
import { MentorwelcomeComponent } from './mentorwelcome/mentorwelcome.component';
import { AdminwelcomeComponent } from './adminwelcome/adminwelcome.component';
import { MentorsearchComponent } from './mentorsearch/mentorsearch.component';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { SearchServiceService } from './search-service.service';
// import { UserprofileComponent } from './userprofile/userprofile.component';
// import { UserloginServiceService } from './userlogin-service.service'

const routes:Routes = [ // added new
  {path:'', redirectTo:'homepage', pathMatch:'full'},
  {path:'homepage', component:HomepageComponent},
  {path:'userlogin', component:UserloginComponent},
  {path:'mentorlogin', component:MentorloginComponent},
  {path:'adminlogin', component:AdminloginComponent},
  {path:'userwelcome', component:UserwelcomeComponent},
  {path:'mentorwelcome', component:MentorwelcomeComponent},
  {path:'adminwelcome', component:AdminwelcomeComponent},
  {path:'mentorsearch/:key', component:MentorsearchComponent},
  {path:'**', redirectTo:'homepage'}
  ];
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    UserloginComponent,
    MentorloginComponent,
    AdminloginComponent,
    UserwelcomeComponent,
    MentorwelcomeComponent,
    AdminwelcomeComponent,
    MentorsearchComponent
    // UserprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
