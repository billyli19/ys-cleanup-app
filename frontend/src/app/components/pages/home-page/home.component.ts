import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //TODO: get trashBags & totalScore dynamically
  currentUser: User;
  trashBags: number = 3;
  totalScore: number = 890;

  constructor(
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    const userJson = localStorage.getItem('User');
    if(userJson) {
      this.currentUser = JSON.parse(userJson);
    }
  }

  public logout() {
    this.userService.logout();
    // this.router.navigateByUrl('/signin');
  }
}
