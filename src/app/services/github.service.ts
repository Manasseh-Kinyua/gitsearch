import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CLIENT_ID } from '../credentials/GithubCred';
import { CLIENT_SECRET } from '../credentials/GithubCred';
    // import { Observable } from 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private httpClient: HttpClient) { }

  //github profile
  public getProfile(searchQuery: any): Observable<any> {
    let dataUrl = `https://api.github.com/users/${searchQuery}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
    return this.httpClient.get<any>(dataUrl).pipe(
      retry(count: 1),
      catchError(this.handleErrors)
    )
  }

  //github repos
  public getRepos(searchQuery): Observable<any[]> {
    let dataUrl = `https://api.github.com/users/${searchQuery}/repos?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
    return this.httpClient.get<any[]>(dataUrl).pipe(
      retry(count: 1),
      catchError(this.handleErrors)
    )
  }


  public handleErrors(error: HttpErrorResponse) {
    let errorMessage: string;
    if(error.error instanceof ErrorEvent) {
      //client side error
      errorMessage = `MESSAGE : ${error.error.message}`;
    } else {
      //server side error
      errorMessage = `STATUS : ${error.status} MESSAGE : ${error.message}`
    }
    return throwError(errorMessage)
  }
}
