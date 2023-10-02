import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/user';
import { LeaderboardService } from 'src/app/services/leaderboard.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css'],
})
export class LeaderboardComponent implements OnInit {
  leaderboard: any;
  currentUser: any;

  constructor(
    private leaderboardService: LeaderboardService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    const user: any = localStorage.getItem('User');
    this.currentUser = JSON.parse(user);

    this.userService.getCurrentUser(this.currentUser.email).subscribe(
      (data) => {
        // Specify IUser as the type here
        this.currentUser = data;
      },
      (error: any) => {
        console.error('Error fetching current user:', error);
        // Handle the error appropriately (e.g., display an error message).
      }
    );

    this.leaderboardService.getAllUsers().subscribe({
      next: (response: User[]) => {
        if (response) {
          // Sort the leaderboard array by user scores in descending order.
          this.leaderboard = response.sort((a, b) => b.score - a.score);
        }
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
