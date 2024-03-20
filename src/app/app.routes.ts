import { Routes } from '@angular/router';
import { CreateGroupContainerComponent } from './groups/create-group-container/create-group-container.component';
import { GroupsComponent } from './groups/groups.component';

export const routes: Routes = [
    { path: '', component: GroupsComponent },
    { path: 'group/create', component: CreateGroupContainerComponent }
];
