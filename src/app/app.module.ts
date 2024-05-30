import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { SubLibComponent } from "sublib";

  
@NgModule({
    declarations: [AppComponent],
    imports: [
      CommonModule,
      BrowserModule,
      SubLibComponent
    ],

    bootstrap: [AppComponent],
  })
  export class AppModule {}