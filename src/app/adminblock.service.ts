import { Injectable } from '@angular/core';
import { Adminblock } from './adminblock';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AdminblockService {

  constructor(private http:HttpClient) { }

  private userUrl = 'http://localhost:8112/users';
  


  public getUsers() {
    return this.http.get<Adminblock[]>(this.userUrl);
  }

  public deleteUser1(user) {
    return this.http.delete(this.userUrl + "/"+ user.id);
  }



}
