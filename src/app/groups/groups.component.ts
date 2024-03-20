import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Group } from './groups.model';

@Component({
  selector: 'app-groups',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './groups.component.html',
  styleUrl: './groups.component.scss',
})
export class GroupsComponent implements OnInit {
  public groups: Group[] = [];

  constructor(
    private readonly http: HttpClient,
    private readonly router: Router,
    ) {}

  ngOnInit() {
    this.fetchGroups();
  }

  private fetchGroups() {
    return this.http.get<Group[]>('https://localhost:7019/api/Groups').subscribe((res) => {
      this.groups = res;
    })
  }

  public handleCreatingNavigate() {
    this.router.navigate(['/group/create'])
  }

  public handleRemove(id: number) {    
    return this.http.delete(`https://localhost:7019/api/Groups/${id}`).subscribe((res) => {
      this.fetchGroups();
    })
  }

  public handleEditPageNavigate(id: number) {
    this.router.navigate([`/group/${id}/edit`])
  }
}
