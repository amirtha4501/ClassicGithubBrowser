import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoListComponent } from './repo-list.component';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GithubService } from '../../services/github.service';

import { of } from 'rxjs';

describe('RepoListComponent', () => {
  let component: RepoListComponent;
  let fixture: ComponentFixture<RepoListComponent>;
  let githubServiceSpy: jasmine.SpyObj<GithubService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('GithubService', ['getUserRepos']);

    TestBed.configureTestingModule({
      declarations: [RepoListComponent],
      imports: [HttpClientTestingModule],
      providers: [
        { provide: GithubService, useValue: spy }
      ]
    });
    fixture = TestBed.createComponent(RepoListComponent);
    component = fixture.componentInstance;
    githubServiceSpy = TestBed.inject(GithubService) as jasmine.SpyObj<GithubService>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call githubService.getUserRepos when fetchRepos is called', () => {
    const mockRepos = [{ name: 'repo1' } as any];
    githubServiceSpy.getUserRepos.and.returnValue(of(mockRepos));

    component.fetchRepos('testuser');

    expect(component.selectedUser).toBe('testuser');
    expect(githubServiceSpy.getUserRepos).toHaveBeenCalledWith('testuser');
    component.repos$.subscribe(repos => {
      expect(repos).toEqual(mockRepos);
    });
  });
});
