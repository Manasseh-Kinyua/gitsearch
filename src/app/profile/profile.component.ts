import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public userName!: string;

  constructor(private accountService: AccountService) { }

    public getUser(userName: any) {

      }


  ngOnInit(): void {
  }

}
