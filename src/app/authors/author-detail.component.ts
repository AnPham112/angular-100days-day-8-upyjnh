import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Author } from '../authors';

@Component({
  selector: `author-detail`,
  templateUrl: './author-detail.component.html',
})
export class AuthorDetailComponent {
  @Input() author: Author;
  @Output() select = new EventEmitter<Author>();
  @Output() delete = new EventEmitter<number>();
}
