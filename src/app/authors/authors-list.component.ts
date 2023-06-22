import { Component } from "@angular/core";
import { Author, authors } from "../authors";

@Component({
  selector: `author-list`,
  template: `
    <author-details
      *ngFor="let author of authors"
      [author]="author"
      (select)="onSelect($event)"
      (delete)="onDelete($event)"
    ></author-details>
    <br />
    <h3>
      currentAuthor : {{ currentAuthor.firstName }} {{ currentAuthor.lastName }}
    </h3>
  `
})
export class AuthorsListComponent {
  authors = authors;
  currentAuthor = authors[0];
  onSelect(selected: Author) {
    this.currentAuthor = selected;
  }
  onDelete(id: number) {
    this.authors = this.authors.filter(author => {
      return author.id != id;
    });
    if (this.currentAuthor.id == id) {
      this.currentAuthor = this.authors[0];
    }
  }
}
