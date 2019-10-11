import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// import { Userprofile } from './userprofile';


// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };
@Injectable({
  providedIn: 'root'
})
export class UserprofileService {

  // id=sessionStorage.getItem('id');
  // constructor(private http:HttpClient) {}

  // private userUrl = 'http://localhost:8222/api/user';
  // //private userUrl = '/api';

  // public getUsers() {
  //   return this.http.get<Userprofile>(this.userUrl+ "/"+ this.id);
  // }
}
