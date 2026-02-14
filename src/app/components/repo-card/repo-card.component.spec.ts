import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoCardComponent } from './repo-card.component';

import { TruncatePipe } from '../../pipes/truncate.pipe';
import { HighlightDirective } from '../../directives/highlight.directive';

describe('RepoCardComponent', () => {
  let component: RepoCardComponent;
  let fixture: ComponentFixture<RepoCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepoCardComponent, TruncatePipe, HighlightDirective]
    });
    fixture = TestBed.createComponent(RepoCardComponent);
    component = fixture.componentInstance;
    component.repository = {
      id: 1,
      name: 'test-repo',
      stargazers_count: 10,
      forks_count: 5,
      language: 'TypeScript',
      html_url: 'http://test.com',
      description: 'Test Description',
      updated_at: new Date().toISOString()
    } as any;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should apply "popular" class if stargazers > 50', () => {
    component.repository.stargazers_count = 60;
    fixture.detectChanges();
    const cardDe = fixture.nativeElement.querySelector('.repo-card');
    expect(cardDe.classList.contains('popular')).toBeTrue();
  });

  it('should not apply "popular" class if stargazers <= 50', () => {
    component.repository.stargazers_count = 10;
    fixture.detectChanges();
    const cardDe = fixture.nativeElement.querySelector('.repo-card');
    expect(cardDe.classList.contains('popular')).toBeFalse();
  });

  it('should apply bold font weight if forks > 10', () => {
    component.repository.forks_count = 15;
    fixture.detectChanges();
    const forksSpan: HTMLElement = fixture.nativeElement.querySelector('.forks');
    expect(forksSpan.style.fontWeight).toBe('600');
  });

  it('should apply normal font weight if forks <= 10', () => {
    component.repository.forks_count = 5;
    fixture.detectChanges();
    const forksSpan: HTMLElement = fixture.nativeElement.querySelector('.forks');
    expect(forksSpan.style.fontWeight).toBe('normal');
  });
});
