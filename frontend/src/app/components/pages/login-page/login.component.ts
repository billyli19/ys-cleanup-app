// Import necessary modules and components from Angular.
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login', // Specifies the selector used to identify this component in HTML templates.
  templateUrl: './login.component.html', // Specifies the HTML template file for this component.
  styleUrls: ['./login.component.css'] // Specifies the CSS styles for this component.
})
export class LoginComponent implements OnInit {
  constructor() {} // Constructor for the LoginComponent.

  ngOnInit(): void {
    // ngOnInit is a lifecycle hook. Code placed here runs when the component is initialized.
    // It's typically used for initialization tasks like setting up data or making API calls.
  }
}
