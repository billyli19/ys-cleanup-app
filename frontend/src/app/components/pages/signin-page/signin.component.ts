// Import necessary modules and components from Angular and custom services.
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signin', // Specifies the selector used to identify this component in HTML templates.
  templateUrl: './signin.component.html', // Specifies the HTML template file for this component.
  styleUrls: ['./signin.component.css'] // Specifies the CSS styles for this component.
})
export class SigninComponent implements OnInit {

  signinForm!: FormGroup; // Declare a FormGroup to manage the form controls.
  hide = true; // Initialize a flag for hiding or showing the password input.
  returnUrl = '/home'; // Initialize a default returnUrl.

  constructor(
    private formBuilder: FormBuilder, // Inject FormBuilder for building the form.
    private userService: UserService, // Inject the UserService for user-related operations.
    private router: Router // Inject the Router for navigating to different views.
  ) { }

  ngOnInit(): void {
    // Initialize the signinForm FormGroup with form controls and validators.
    this.signinForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]), // Email input with required and email format validation.
      password: new FormControl('', Validators.required), // Password input with required validation.
    });
  }

  // A getter function to easily access form controls in the template.
  get formControls() {
    return this.signinForm.controls;
  }

  // Function to handle form submission.
  onSubmit() {
    console.log(this.signinForm.value); // Log the form values to the console for debugging (can be removed in production).

    // Call the login method of UserService to authenticate the user.
    this.userService.login({
      email: this.formControls['email'].value, // Get the email value from the form.
      password: this.formControls['password'].value // Get the password value from the form.
    }).subscribe(() => {
      this.router.navigateByUrl(this.returnUrl); // Navigate to the specified returnUrl after successful login.
    });
  }
}
