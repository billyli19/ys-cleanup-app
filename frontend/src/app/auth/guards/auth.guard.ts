// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    // Check if the user is logged in (you can implement your logic here)
    const isLoggedIn = localStorage.getItem('User');

    if (!isLoggedIn) {
      // If not logged in, redirect to the login page
      this.router.navigate(['']);
      return false; // Prevent navigation to the requested route
    }

    return true; // Allow navigation to the requested route
  }
}
