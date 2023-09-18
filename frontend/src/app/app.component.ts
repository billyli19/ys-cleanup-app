// Import necessary module and component from Angular.
import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // Specifies the selector used to identify this component in HTML templates.
  templateUrl: './app.component.html', // Specifies the HTML template file for this component.
  styleUrls: ['./app.component.css'] // Specifies the CSS styles for this component.
})
export class AppComponent {
  title = 'ys-cleanup-frontend'; // Define a property 'title' with the value 'ys-cleanup-frontend'.
}
