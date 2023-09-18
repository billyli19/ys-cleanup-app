// Import necessary modules and decorators from Angular.
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    // Check if the user is logged in (you can implement your logic here)
    const isLoggedIn = localStorage.getItem('User'); // Retrieve user login status from local storage.

    if (!isLoggedIn) {
      // If not logged in, redirect to the login page.
      this.router.navigate(['']); // Navigate to the root path (login page).
      return false; // Prevent navigation to the requested route.
    }

    // If the user is logged in, allow navigation to the requested route.
    return true;
  }
}
