import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Adminadd } from './adminadd';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AdminaddService {

  constructor(private http:HttpClient) { }

  private userUrl = 'http://localhost:8114/tech';
  //private userUrl = '/api';

  public getUsers() {
    return this.http.get<Adminadd[]>(this.userUrl);
  }

  public deleteUser(user) {
    return this.http.delete(this.userUrl + "/"+ user.id);
  }

  public createUser(user) {
    return this.http.post<Adminadd>(this.userUrl, user);
  }

  public updateUser(user: any) {
    console.log(user);
    return this.http.put(this.userUrl + "/"+ user.id,user);
  }

}
