import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Trainerskill} from './trainerskill';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class TrainerskillService {

  constructor(private http:HttpClient) { }

  private userUrl = 'http://localhost:8117/skills';
  //private userUrl = '/api';

  public getUsers() {
    return this.http.get<Trainerskill[]>(this.userUrl);
  }

  public deleteUser(user) {
    return this.http.delete(this.userUrl + "/"+ user.id);
  }

  public createUser(user) {
    return this.http.post<Trainerskill>(this.userUrl, user);
  }

}
