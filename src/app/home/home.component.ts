import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { User} from '../user';
import { Repository } from '../repository';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 
  profile:Object;
  repos:Object;
  username:string;

  constructor(private dataService: DataService) { 

  }

  findProfile(){
    this.dataService.updateProfile(this.username);
    this.dataService.getProfileInfo().subscribe(profile =>{
      console.log(profile);
      this.profile = profile;
  
   });

   this.dataService.getProfileRepos().subscribe(repos =>{
     console.log(repos);
     this.repos = repos;
   });
   
  }

  ngOnInit() {}

}


