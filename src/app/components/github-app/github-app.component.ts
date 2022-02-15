import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-github-app',
  templateUrl: './github-app.component.html',
  styleUrls: ['./github-app.component.css']
})
export class GithubAppComponent implements OnInit {

  public githubUserQuery?: string;
  public githubProfile?: any;
  public githubRepos?: any[];
  public errorMessage?: string;

  constructor(private githubService: GithubService) { }

  public searchUser() {
    //to get github profile
    this.githubService.getProfile(this.githubUserQuery).subscribe(next(data) => {
      this.githubProfile = data;
    } , error(error: any) => {
      this.errorMessage = error;
    })
  }

  ngOnInit(): void {
  }

}
