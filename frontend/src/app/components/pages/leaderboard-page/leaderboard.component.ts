import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/user';
import { LeaderboardService } from 'src/app/services/leaderboard.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
  leaderboard: User[] = [];
  currentUser: User | null = null;

  constructor(
    private leaderboardService: LeaderboardService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const userJson = localStorage.getItem('User');
    if (userJson) {
      this.currentUser = JSON.parse(userJson);
    }

    this.leaderboardService.getJSON().subscribe({
      next: (response: User[]) => {
        if (response) {
          // Sort the leaderboard array by user scores in descending order.
          this.leaderboard = response.sort((a, b) => b.score - a.score);
        }
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
