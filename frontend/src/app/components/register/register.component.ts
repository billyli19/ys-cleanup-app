import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  // name: string;
  // email: string;
  // password: string;
  // confirmPassword: string;
  // organisation: string;

  name = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');
  confirmPassword = new FormControl('');
  organisation = new FormControl('');

  hide = true;

  getErrorMessage(){

  }

  // onSubmit() {
  //   console.log('Registration form submitted!');
  //   console.log(`Name: ${this.name}`);
  //   console.log(`Email: ${this.email}`);
  //   console.log(`Password: ${this.password}`);
  //   console.log(`Confirm Password: ${this.confirmPassword}`);
  //   console.log(`Organisation: ${this.organisation}`);
  // }
}