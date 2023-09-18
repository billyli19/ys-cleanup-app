import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
  
  currentUser: User;

  constructor(
    private userService: UserService,
    private router: Router) { }

    ngOnInit(): void {
      const userJson = localStorage.getItem('User');
      if(userJson) {
        this.currentUser = JSON.parse(userJson);
      }
    }
}
