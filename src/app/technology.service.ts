import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Technology} from './technology';

@Injectable({
  providedIn: 'root'
})
export class TechnologyService {

  constructor(private http:HttpClient, private router: Router) { }

//   getTechnology():Observable<EntityResponseType>{
//    return this.http.get<Technology[]>("http://localhost:8222/api/technology", {observe: 'response'});
//   }
// deleteTechnology(id:number){

// }
}
