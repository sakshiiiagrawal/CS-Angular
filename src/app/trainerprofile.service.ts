import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Trainerprofile } from './trainerprofile';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TrainerprofileService {

  id:any;
 
  constructor(private http:HttpClient) {}

  private userUrl = 'http://localhost:8112/users';

  public getUsers() {
    this.id=sessionStorage.getItem('id')
    console.log("hello!!!"+this.id);
    return this.http.get<Trainerprofile>(this.userUrl+ "/"+ this.id);
  }

}
