import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CLIENT_ID } from '../credentials/GithubCred';
import { CLIENT_SECRET } from '../credentials/GithubCred';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private httpClient: HttpClient) { }

  //github profile
  public getProfile(searchQuery) {
    let dataUrl = `https://api.github.com/users/${searchQuery}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
    return this.httpClient.get()
  }

  //github repos
}
