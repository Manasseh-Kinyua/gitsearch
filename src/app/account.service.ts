import { Injectable } from '@angular/core';
import { User } from './user';
import { Repo } from './repo';
import { Observable, observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  accountDetails!: User;
  repos: Repo;
  clientid: string = "3dd2666d6db96a58e0aa"
  clientsecret: string = "8951785aaf5c1c732b1092ae0671304fc1a28975"

  url: string = "https://api.github.com/users/"

  constructor(private http: HttpClient) {
    this.accountDetails = new User("", "", "", "", "", 0, 0, 0, 0, "", "", "", new Date);
    this.repos = [];
  }

  getUser(userName: string) {
    interface ApiResponse{
      name: string;
      html_url: string;
      avatar_url:string;
      company:string;
      bio:string;
      public_repos:number;
      followers:number;
      following:number;
      public_gists:number;
      location:string;
      email:string;
      blog:string;
      created_at:Date;
    }
    let promise = new promise<void>((resolve, reject) =>{
      let apiUrl = this.url + userName + '?client_id='+this.clientid+'&client_secret='+this.clientsecret
      this.http.get<ApiResponse>(apiUrl)
        .toPromise()
        .then(
          (res) => {
            this.accountDetails.login = res!.name
            this.accountDetails.url = res!.html_url
            this.accountDetails.avatar = res!.avatar_url
            this.accountDetails.company = res!.company
            this.accountDetails.bio = res!.bio
            this.accountDetails.public_repos = res!.public_repos
            this.accountDetails.followers = res!.followers
            this.accountDetails.following = res!.following
            this.accountDetails.gist = res!.public_gists
            this.accountDetails.location = res!.location
            this.accountDetails.email = res!.email
            this.accountDetails.blog = res!.blog
            this.accountDetails.created_at = res!.created_at
          }
        )
    })
  }
}
