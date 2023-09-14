import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name: string = 'John';
  trashBags: number = 3;
  totalScore: number = 890;

  constructor(
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    
  }

  logout() {
    this.userService.logout();
    // this.router.navigateByUrl('/signin');
  }
}
