import { Injectable } from '@angular/core';
// import {User} from "./user";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private username:string;
  private clientid = 'f20de51a7a393183d0bc';
  private clientsecret = '991f96167aeeb1a4f18907af07164b41ed3e2ac0';
  constructor(private http: HttpClient) { 
    console.log('Service is now ready!');
    this.username = 'naisenyamungai';
  }

  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret);
  }
}
