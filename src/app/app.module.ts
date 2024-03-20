import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { routes } from "./app.routes";
import { GroupsModule } from "./groups/groups.module";


@NgModule({
    declarations: [
      AppComponent
    ],
    imports: [ 
        BrowserModule,
        RouterModule.forChild(routes),
        GroupsModule,
        HttpClientModule 
    ],
    bootstrap: [AppComponent]
  })
  export class AppModule { }