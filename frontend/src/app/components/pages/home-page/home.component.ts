// Import necessary modules and components from Angular and custom services and models.
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html', // Specifies the HTML template file for this component.
  styleUrls: ['./home.component.css'] // Specifies the CSS styles for this component.
})
export class HomeComponent implements OnInit {

  currentUser: any; // Declare a variable to store the current user.

  constructor(
    private userService: UserService, // Inject the UserService for user-related operations.
  ) { }

  ngOnInit(): void {
  this.userService.getCurrentUser().subscribe(
    (data) => { // Specify IUser as the type here
      this.currentUser = data;
    },
    (error: any) => {
      console.error('Error fetching current user:', error);
      // Handle the error appropriately (e.g., display an error message).
    }
  );
}

  // Define a public method for logging out the current user.
  public logout() {
    this.userService.logout(); // Call the logout method from the UserService to log out the user.
  }
}
