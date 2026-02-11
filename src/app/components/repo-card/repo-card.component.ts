import { Component, Input } from '@angular/core';
import { Repository } from '../../models/repository.model';

@Component({
  selector: 'app-repo-card',
  templateUrl: './repo-card.component.html',
  styleUrls: ['./repo-card.component.css']
})
export class RepoCardComponent {

  @Input() repository!: Repository;

  popularityThreshold = 50; // class property used in template
}
