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
    return this.httpClient.get(dataUrl).pipe(
      retry(count 1)
      catchError(this.handleErrors)
    )
  }

  //github repos
  public handleErrors(error: HttpErrorResponse) {
    let erroMessage: string;
    if(error.error instanceof ErrorEvent) {
      //client side error
      errorMessage = `MESSAGE : ${error.error.message}`;
    } else {
      //server side error
      erroMessage = `STATUS : ${error.status} MESSAGE : ${error.message}`
    }
    return throwError(erroMessage)
  }
}
