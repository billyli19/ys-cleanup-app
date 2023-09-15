import { Component } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent {
  goBack(stepper: MatStepper){
    stepper.previous();
  }

  goForward(stepper: MatStepper){
      stepper.next();
  }
}
