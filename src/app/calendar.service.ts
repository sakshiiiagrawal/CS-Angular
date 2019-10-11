import { Injectable } from '@angular/core';
import { Calendar } from './calendar';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor(private http:HttpClient) { }

  private userUrl = 'http://localhost:8117/calendars';

  public getUsers() {
    return this.http.get<Calendar[]>(this.userUrl);
  }

  // public deleteUser(user) {
  //   return this.http.delete(this.userUrl + "/"+ user.id);
  // }

  // public createUser(user) {
  //   return this.http.post<Calendar>(this.userUrl, user);
  // }
}
