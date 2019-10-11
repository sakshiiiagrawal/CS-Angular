import { Component, OnInit } from '@angular/core';
import { Searchmodel } from '../searchmodel';
import { SearchServiceService } from '../search-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mentorsearch',
  templateUrl: './mentorsearch.component.html',
  styleUrls: ['./mentorsearch.component.css']
})
export class MentorsearchComponent implements OnInit {
  key: string;
  SearchResult: Searchmodel[];
  // searchs: Searchmodel[];
  constructor(private searchServiceService:SearchServiceService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.key=params.get('key');
      this.searchServiceService.getSearchResult(this.key).subscribe(data=>{
        this.SearchResult = data.body;
        console.log("in the end"+this.SearchResult);
      })
    })
  }

}
