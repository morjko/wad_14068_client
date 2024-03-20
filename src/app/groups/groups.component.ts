import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-groups',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './groups.component.html',
  styleUrl: './groups.component.scss',
})
export class GroupsComponent implements OnInit {
  public groups: any = [];

  constructor(
    private readonly http: HttpClient,
    private readonly router: Router
    ) {}

  ngOnInit() {
    this.fetchGroups()
  }


  public fetchGroups() {
    return this.http.get('https://localhost:7019/api/Groups').subscribe((res) => {
      this.groups = res;
    })
  }

  public handleCreatingNavigate() {
    this.router.navigate(['/group/create'])
  }
}
