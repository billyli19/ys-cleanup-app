import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  email = new FormControl('');
  password = new FormControl('');

  hide = true;

  getErrorMessage(){

  }

  onSubmit() {
    console.log('Sign-in form submitted!');
    console.log(`Email: ${this.email}`);
    console.log(`Password: ${this.password}`);
  }
}
