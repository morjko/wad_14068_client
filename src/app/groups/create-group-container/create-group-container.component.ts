import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-group-container',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-group-container.component.html',
  styleUrl: './create-group-container.component.scss',
})
export class CreateGroupContainerComponent {
  public form: FormGroup;

  constructor(private readonly http: HttpClient, private readonly router: Router) {
    this.form = new FormGroup({
        title: new FormControl('', Validators.required)
    })
  }


  //function for CREATE a new group
  public handleCreateNewGroup() {
    return this.http.post('https://localhost:7019/api/Groups', this.form.value).subscribe(() => {
        this.form.reset()
        this.router.navigate(['/'])
    });
  }
}
