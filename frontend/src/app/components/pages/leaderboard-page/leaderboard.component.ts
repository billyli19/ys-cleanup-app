// Import necessary modules and components from Angular and custom services and models.
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html', // Specifies the HTML template file for this component.
  styleUrls: ['./leaderboard.component.css'] // Specifies the CSS styles for this component.
})
export class LeaderboardComponent implements OnInit {
  
  currentUser: User; // Declare a variable to store the current user.

  constructor(
    private userService: UserService, // Inject the UserService for user-related operations.
    private router: Router // Inject the Router for navigating to different views.
  ) { }

  ngOnInit(): void {
    // When the component initializes, retrieve user information from local storage if available.
    const userJson = localStorage.getItem('User');
    if (userJson) {
      this.currentUser = JSON.parse(userJson); // Parse and assign the user data to currentUser.
    }
  }
}
