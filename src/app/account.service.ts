import { Injectable } from '@angular/core';
import { User } from './user';
import { Repo } from './repo';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  acountDetails: User;
  repos: Repo;
  clientid: string = "3dd2666d6db96a58e0aa"
  clientsecret: string = "8951785aaf5c1c732b1092ae0671304fc1a28975"

  apiUrl: string = "https://api.github.com/users/"

  constructor(private http: HttpClient) {
    this.accountDetails = new User("", "", "", "", "", 0, 0, 0, 0, "", "", "", new Date);
    this.repos = [];
  }
}
