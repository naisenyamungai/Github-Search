import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { User} from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 
  profile:Object;

  constructor(private dataService: DataService) { 
    this.dataService.getProfileInfo().subscribe(profile =>{
      console.log(profile);
      this.profile = profile;
  
   });
  }

  ngOnInit() {}

}


