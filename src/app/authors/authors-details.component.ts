import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Author } from "../authors";

@Component({
  selector: `author-details`,
  template: `
    <div>
      {{ author.firstName }} {{ author.lastName }}
      <button style="margin-left:10px" (click)="select.emit(author)">
        Action
      </button>
      <button style="margin-left:5px" (click)="delete.emit(author.id)">
        x
      </button>
    </div>
  `
})
export class AuthorDetailsComponent {
  @Input() author: Author;
  @Output() select = new EventEmitter<Author>();
  @Output() delete = new EventEmitter<number>();
}
