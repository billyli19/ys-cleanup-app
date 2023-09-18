// Import necessary modules and components from Angular and custom services and models.
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { IUserRegister } from 'src/app/shared/interfaces/IUserRegister';
import { PasswordMatchValidator } from 'src/app/shared/validators/password_match_validator';

@Component({
  selector: 'app-register', // Specifies the selector used to identify this component in HTML templates.
  templateUrl: './register.component.html', // Specifies the HTML template file for this component.
  styleUrls: ['./register.component.css'] // Specifies the CSS styles for this component.
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup; // Declare a FormGroup to manage the form controls.
  returnUrl = '/home'; // Initialize a default returnUrl.
  hide = true; // Initialize a flag for hiding or showing the password input.

  constructor(
    private formBuilder: FormBuilder, // Inject FormBuilder for building the form.
    private userService: UserService, // Inject the UserService for user-related operations.
    private router: Router // Inject the Router for navigating to different views.
  ) {}

  ngOnInit(): void {
    // Initialize the registerForm FormGroup with form controls and validators.
    this.registerForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
      organisation: new FormControl('', Validators.required),
    }, {
      Validators: PasswordMatchValidator('password', 'confirmPassword') // Use a custom validator to check password and confirmPassword.
    });
  }

  // A getter function to easily access form controls in the template.
  get formControls() {
    return this.registerForm.controls;
  }

  // Function to handle form submission.
  onSubmit() {
    if (this.registerForm.invalid) return; // If the form is invalid, do not proceed.

    // Extract form values and create a user object.
    const formValues = this.registerForm.value;
    const user: IUserRegister = {
      name: formValues.name,
      email: formValues.email,
      password: formValues.password,
      confirmPassword: formValues.confirmPassword,
      organisation: formValues.organisation
    };

    // Call the register method of UserService to register the user.
    this.userService.register(user).subscribe(_ => {
      this.router.navigateByUrl(this.returnUrl); // Navigate to the specified returnUrl after successful registration.
    });
  }
}
