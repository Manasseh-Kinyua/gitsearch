import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public userName!: string;

  public getUser() {
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
