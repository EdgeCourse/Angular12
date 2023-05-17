
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <form [formGroup]="userForm" (ngSubmit)="onSubmit()">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" formControlName="name">
        <div *ngIf="name.errors?.customError">Must be Admin.</div>
      </div>

      <button type="submit" [disabled]="userForm.invalid">Submit</button>
    </form>
  `
})
export class AppComponent {
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      name: ['', this.customValidator()]
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      // Form submission logic
    }
  }

  get name() {
    return this.userForm.get('name');
  }

  customValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value = control.value;
      if (value && value !== "Admin") {
        return { customError: true };
      }
      return null;
    };
  }
}
