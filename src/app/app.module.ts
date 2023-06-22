import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { AuthorsListComponent } from "./authors/authors-list.component";
import { AuthorDetailsComponent } from "./authors/authors-details.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    AuthorsListComponent,
    AuthorDetailsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
