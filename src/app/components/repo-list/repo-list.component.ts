import { Component, Input, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Repository } from '../../models/repository.model';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.css']
})
export class RepoListComponent {

  repos$!: Observable<Repository[]>;
  selectedUser: string = '';

  constructor(private githubService: GithubService) {}

  fetchRepos(username: string) {
    this.selectedUser = username;
    this.repos$ = this.githubService.getUserRepos(username);
  }
}
