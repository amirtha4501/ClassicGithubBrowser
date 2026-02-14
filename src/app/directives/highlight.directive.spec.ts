import { HighlightDirective } from './highlight.directive';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

@Component({
  template: `<div [appHighlight]="'red'">Test</div>`
})
class TestComponent { }

describe('HighlightDirective', () => {
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [HighlightDirective, TestComponent]
    }).createComponent(TestComponent);

    fixture.detectChanges();
  });

  it('should apply border color', () => {
    const div: HTMLElement = fixture.nativeElement.querySelector('div');
    expect(div.style.borderLeft).toBe('5px solid red');
  });
});
