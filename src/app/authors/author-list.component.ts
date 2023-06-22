import { Component } from '@angular/core';
import { Author, authors } from '../authors';

@Component({
  selector: 'author-list',
  templateUrl: './author-list.component.html',
})
export class AuthorListComponent {
  authors = authors;
  currentAuthor = authors[0];
  onSelect(selected: Author) {
    this.currentAuthor = selected;
  }
  onDelete(id: number) {
    this.authors = this.authors.filter((author) => {
      return author.id != id;
    });
    if (this.currentAuthor.id == id) {
      this.currentAuthor = this.authors[0];
    }
  }
}
