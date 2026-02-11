import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Repository } from '../models/repository.model';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private baseUrl = 'https://api.github.com/users';

  constructor(private http: HttpClient) {}

  getUserRepos(username: string): Observable<Repository[]> {
    return this.http.get<Repository[]>(`${this.baseUrl}/${username}/repos`);
  }
}
