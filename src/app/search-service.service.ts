import { Injectable } from '@angular/core';
import { Searchmodel } from './searchmodel';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators'
import { Router } from '@angular/router';

type EntityResponseType=HttpResponse<Searchmodel[]>;
@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {
  
  constructor(private http: HttpClient, private auth: SearchServiceService,private router: Router) { 
    
  }

signupUser(User:any){
  console.log(User);
  return this.http.post("http://localhost:8111/register",User);
}

signupMentor(Mentor:any){
  console.log(Mentor);
  return this.http.post("http://localhost:8111/register",Mentor);
}


getSearchResult(keyword: string): Observable<EntityResponseType>{
  console.log("hello!!!!!!!!!!!!"+keyword);
  return this.http.get<Searchmodel[]>("http://localhost:8113/search/tech/"+keyword,{observe: 'response'});
}

loginUser(username: string, password:string){
  // console.log(User);
  return this.http.post<any>('http://localhost:8111/authenticate', {username:username, password:password}).pipe(map(result=>{
    if(result && result.token && result.user.role=='user'){
      localStorage.setItem('CurrentUser', (result.user));
      localStorage.setItem('JwtToken',JSON.stringify(result.token));
      localStorage.setItem('id',JSON.stringify(result.user.id));
      localStorage.setItem('role', (result.user.role));
      this.router.navigate(['/userwelcome']);
    }
        else{
    alert("Incorrect Credentials!");
  }
  }))
  
}

loginMentor(username: string, password:string){
  // console.log(User);
  return this.http.post<any>('http://localhost:8111/authenticate', {username:username, password:password}).pipe(map(result=>{
    if(result && result.token && result.user.role=='mentor'){
      localStorage.setItem('CurrentUser', (result.user));
      localStorage.setItem('JwtToken',JSON.stringify(result.token));
      localStorage.setItem('id',JSON.stringify(result.user.id));
      localStorage.setItem('role', (result.user.role));
      this.router.navigate(['/mentorwelcome']);
    }
    else{
    alert("Incorrect Credentials!");
  }
  }))
  
}
logout(){
  localStorage.clear();
}
}
