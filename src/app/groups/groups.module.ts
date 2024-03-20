import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CreateGroupContainerComponent } from "./create-group-container/create-group-container.component";
import { GroupsComponent } from "./groups.component";

@NgModule({
    imports: [CommonModule],
    declarations: [
      GroupsComponent,
    ],
  })
  export class GroupsModule { }