// Import necessary modules and components from Angular and Angular Material.
import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { ImageDetailsService } from 'src/app/services/image-details.service';

@Component({
  selector: 'app-stepper', // Specifies the selector used to identify this component in HTML templates.
  templateUrl: './stepper.component.html', // Specifies the HTML template file for this component.
  styleUrls: ['./stepper.component.css'] // Specifies the CSS styles for this component.
})
export class StepperComponent {
  @ViewChild('captureImageInput') captureImageInput : ElementRef; // File upload input element

  constructor(
    private imageDetailsService: ImageDetailsService
  ) {}

  get imageDetails() {
    return this.imageDetailsService.imageDetails;
  }

  // Function to go back one step in the stepper.
  goBack(stepper: MatStepper) {
    stepper.previous(); // Use the MatStepper's 'previous()' method to navigate to the previous step.
  }

  // Function to go forward one step in the stepper.
  goForward(stepper: MatStepper) {
    console.log(stepper.selectedIndex, this.imageDetails)
    stepper.next(); // Use the MatStepper's 'next()' method to navigate to the next step.
  }

  submit(stepper: MatStepper){
    console.log("submitted");
  }

  // Function for clicking input event
  captureImage(stepper: MatStepper){
    console.log("submitted", stepper);
    this.captureImageInput.nativeElement.click();
  }

  // Function for uploading image
  captureImageFile(stepper: MatStepper, captureImage: any){
    const file = captureImage.files[0];
    const reader = new FileReader();
    const scope = 
    reader.onload = e => this.setImageDetails(stepper, e?.target?.result ?? '', file);
    reader.readAsDataURL(file);    
    console.log("submitted", stepper.selectedIndex, this.imageDetails.afterImageSrc, );
  }

  setImageDetails(stepper: MatStepper, reader: string | ArrayBuffer, file: File) {
    switch(stepper.selectedIndex) {
      case 0: {
        this.imageDetails.currecntImageSrc = reader;
        this.imageDetails.currecntImageFile = file;
        break;
      }
      case 1: {
        this.imageDetails.afterImageSrc = reader;
        this.imageDetails.afterImageFile = file;
        break;
      }
    }
  }

  totalTrashBags($event: any){
    this.imageDetails.begCount = $event.target.value;
  }
}
