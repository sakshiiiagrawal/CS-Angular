import { Component, OnInit } from '@angular/core';
import { SearchServiceService } from '../search-service.service';
import { Searchmodel } from '../searchmodel';
import {FormControl, FormGroup, FormBuilder, Validators, NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {
  Searchmodel:Searchmodel[];

  SearchKeyword:FormGroup;
  searchForm: FormGroup;
  key:string;

  constructor(private searchService: SearchServiceService, private fb: FormBuilder, private router: Router) {}
searchFrom1=new FormGroup({
  SearchKeyword:new FormControl()
})

search(sf:NgForm):void{
  this.key=sf.value.SearchKeyword;
  console.log(sf.value.SearchKeyword+"hi......")
  this.router.navigate(['/mentorsearch/',this.key]);
  
}

  ngOnInit() {}
}