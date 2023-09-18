// Import necessary modules and components from Angular and Angular Material.
import { Component } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-stepper', // Specifies the selector used to identify this component in HTML templates.
  templateUrl: './stepper.component.html', // Specifies the HTML template file for this component.
  styleUrls: ['./stepper.component.css'] // Specifies the CSS styles for this component.
})
export class StepperComponent {

  // Function to go back one step in the stepper.
  goBack(stepper: MatStepper) {
    stepper.previous(); // Use the MatStepper's 'previous()' method to navigate to the previous step.
  }

  // Function to go forward one step in the stepper.
  goForward(stepper: MatStepper) {
    stepper.next(); // Use the MatStepper's 'next()' method to navigate to the next step.
  }

  submit(stepper: MatStepper){
    console.log("submitted", stepper);
}
}
