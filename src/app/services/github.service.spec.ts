import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GithubService } from './github.service';
import { Repository } from '../models/repository.model';

describe('GithubService', () => {
  let service: GithubService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GithubService]
    });
    service = TestBed.inject(GithubService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch repositories for a user', () => {
    const dummyRepos: Repository[] = [
      { id: 1, name: 'repo1', description: 'desc1', html_url: 'url1' } as Repository,
      { id: 2, name: 'repo2', description: 'desc2', html_url: 'url2' } as Repository
    ];

    service.getUserRepos('testuser').subscribe(repos => {
      expect(repos.length).toBe(2);
      expect(repos).toEqual(dummyRepos);
    });

    const req = httpMock.expectOne('https://api.github.com/users/testuser/repos');
    expect(req.request.method).toBe('GET');
    req.flush(dummyRepos);
  });
});
