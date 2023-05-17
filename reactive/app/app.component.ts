import { Component } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({

  selector: 'app-root',

  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css']

})

export class AppComponent {

  userForm: FormGroup;
  



  constructor() {

    this.userForm = new FormGroup({

      name!: new FormControl(' ', Validators.required),

      email!: new FormControl(' ', [Validators.required, Validators.email]),

      password!: new FormControl(' ', [Validators.required, Validators.minLength(6)])

    });

  }



  // Getter methods for accessing form controls in the template

  get name() { return this.userForm.get('name'); }

  get email() { return this.userForm.get('email'); }

  get password() { return this.userForm.get('password'); }



  onSubmit() {

    if (this.userForm.valid) {

      // Form is valid, perform form submission or other actions

      console.log(this.userForm.value);

    } else {

      // Form is invalid, handle validation errors
      //built into Angular
      this.userForm.markAllAsTouched();

    }

  }

}
