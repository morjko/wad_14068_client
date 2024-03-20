import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Group } from '../groups.model';

@Component({
  selector: 'app-edit-group-container',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-group-container.component.html',
  styleUrl: './edit-group-container.component.scss',
})
export class EditGroupContainerComponent implements OnInit {
    public groupId: number;

    public form: FormGroup;

  constructor(
        private readonly http: HttpClient,
        private readonly router: Router,
        private readonly route: ActivatedRoute
      ) {
    this.form = new FormGroup({
        title: new FormControl('', Validators.required)
    })

    this.groupId = +this.route.snapshot.params['id']
  }

  ngOnInit() {
      if (this.groupId) {
        this.fetchGroupDetails()
      }      
  }

  //function to get details for selected group
  public fetchGroupDetails() {
    return this.http.get<Group>(`https://localhost:7019/api/Groups/${this.groupId}`).subscribe((res) => {
        if (res.title) {
            this.form.get('title')?.setValue(res.title)
        }
    });
  }

  //function to EDIT selected group
  public handleEdit() {
    const data = {
        id: this.groupId,
        ...this.form.value,
    }

    return this.http.put(`https://localhost:7019/api/Groups/${this.groupId}`, data).subscribe((res) => {
        this.router.navigate(['/'])
    });
  }
}
