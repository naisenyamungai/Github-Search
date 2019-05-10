import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ObjectUnsubscribedError } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ProfileInfo:Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getProfileInfo()
  }

}
