// Import necessary modules and components from Angular and custom services and models.
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html', // Specifies the HTML template file for this component.
  styleUrls: ['./home.component.css'] // Specifies the CSS styles for this component.
})
export class HomeComponent implements OnInit {

  currentUser: any; // Declare a variable to store the current user.
  testData: any;

  // currentUser: { name: string, trashBags: number, score: number } = { name: '', trashBags: 0, score: 0 };

  constructor(
    private userService: UserService, // Inject the UserService for user-related operations.
    private router: Router // Inject the Router for navigating to different views.
  ) { }

  ngOnInit(): void {
    // // When the component initializes, retrieve user information from local storage if available.
    // const userJson = localStorage.getItem('User');
    // if (userJson) {
    //   this.currentUser = JSON.parse(userJson); // Parse and assign the user data to currentUser.
    // }

    // this.userService.getData().subscribe((data) => {
    //   this.testData = data;

    //   console.log(this.testData);
    // });

    this.userService.getCurrentUser().subscribe((data) => {
      this.testData = data;
    });


    // this.userService.getCurrentUser().subscribe((data) => {
    //   this.currentUser = data;
    // })
  }

  // Define a public method for logging out the current user.
  public logout() {
    this.userService.logout(); // Call the logout method from the UserService to log out the user.
  }
}
