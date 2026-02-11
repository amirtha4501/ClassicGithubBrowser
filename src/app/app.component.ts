import { Component, ViewChild } from '@angular/core';
import { RepoListComponent } from './components/repo-list/repo-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'github-browser';

  @ViewChild(RepoListComponent)
  repoListComponent!: RepoListComponent;

  onSearch(username: string) {
    this.repoListComponent.fetchRepos(username);
  }
}
