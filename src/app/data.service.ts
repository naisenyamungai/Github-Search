import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  private username:string;
  private clientid; 
  private clientsecret;

  constructor(private http: HttpClient) { 
    console.log('Service is now ready!');
    this.username = 'naisenyamungai';
  }

  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret);
  }

  getProfileRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret);
  }

  updateProfile(username:string){
    this.username = username;
  }
}
