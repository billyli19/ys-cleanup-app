// Import necessary modules and components from Angular and Angular Material.
import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { ImageDetailsService } from 'src/app/services/image-details.service';

@Component({
  selector: 'app-stepper', // Specifies the selector used to identify this component in HTML templates.
  templateUrl: './stepper.component.html', // Specifies the HTML template file for this component.
  styleUrls: ['./stepper.component.css'] // Specifies the CSS styles for this component.
})
export class StepperComponent {
  @ViewChild('captureImageInput') captureImageInput: ElementRef; // File upload input element

  constructor(
    private imageDetailsService: ImageDetailsService,
    private router: Router
  ) {}

  // Get the image details from the ImageDetailsService.
  get imageDetails() {
    return this.imageDetailsService.imageDetails;
  }

  // Function to go back one step in the stepper.
  goBack(stepper: MatStepper) {
    // Check if the current step index is 0 (first step).
    if (stepper.selectedIndex === 0) {
      // Perform your desired action to redirect the user to the previous page.
      // For example, you can use Angular's router to navigate back.
      // Replace 'navigateBackToPreviousPage()' with the appropriate routing logic.
      this.navigateBackToPreviousPage();
    } else {
      // If not on the first step, navigate to the previous step.
      stepper.previous();
    }
  }

  // Function to go forward one step in the stepper.
  goForward(stepper: MatStepper) {
    console.log(stepper.selectedIndex, this.imageDetails);
    stepper.next(); // Use the MatStepper's 'next()' method to navigate to the next step.
  }

  // Function for handling the submission.
  submit(stepper: MatStepper) {
    console.log('submitted');
  }

  // Function for triggering the file input element.
  captureImage(stepper: MatStepper) {
    console.log('submitted', stepper);
    this.captureImageInput.nativeElement.click();
  }

  // Function for uploading an image.
  captureImageFile(stepper: MatStepper, captureImage: any) {
    const file = captureImage.files[0];
    const reader = new FileReader();

    // Set up an event handler for when the file is loaded.
    reader.onload = (e) =>
      this.setImageDetails(stepper, e?.target?.result ?? '', file);

    // Read the file as a data URL.
    reader.readAsDataURL(file);
    console.log(
      'submitted',
      stepper.selectedIndex,
      this.imageDetails.afterImageSrc
    );
  }

  // Function to set image details based on the current stepper index.
  setImageDetails(
    stepper: MatStepper,
    reader: string | ArrayBuffer,
    file: File
  ) {
    switch (stepper.selectedIndex) {
      case 0: {
        this.imageDetails.currentImageSrc = reader;
        this.imageDetails.currentImageFile = file;
        break;
      }
      case 1: {
        this.imageDetails.afterImageSrc = reader;
        this.imageDetails.afterImageFile = file;
        break;
      }
    }
  }

  // Function to update the begCount property in imageDetails.
  totalTrashBags($event: any) {
    this.imageDetails.begCount = $event.target.value;
  }

  // Function to navigate back to the previous page using Angular's router.
  private navigateBackToPreviousPage() {
    this.router.navigate(['/home']);
  }
}
