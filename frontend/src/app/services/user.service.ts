// Import necessary modules and components from Angular and external libraries.
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, tap, throwError } from 'rxjs';
import { IUserLogin } from '../shared/interfaces/IUserLogin';
import { HttpClient } from '@angular/common/http';
import { USER_LOGIN_URL, USER_REGISTER_URL } from '../shared/constants/Api';
import { ToastrService } from 'ngx-toastr';
import { IUserRegister } from '../shared/interfaces/IUserRegister';
import { User } from '../shared/models/user';

// Constant for the key used to store user data in local storage.
const USER_KEY = 'User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSubject = new BehaviorSubject<User>(
    this.getUserFromLocalStorage()
  );
  public userObservable: Observable<User>;

  constructor(private http: HttpClient, private toastrService: ToastrService) {
    this.userObservable = this.userSubject.asObservable();
  }

  private userEmail = this.userSubject.value.email;

  getCurrentUser() {
    return this.http.get('http://localhost:8080/api/users/users/' + this.userEmail);
  }

  public submitTrashBags(trashBags: number): Observable<any> {
    const data = {
      email: this.userEmail,
      trashBags: trashBags
    };

    return this.http.post('http://localhost:8080/api/users/submitTrash', data).pipe(
      tap(() => {
        this.toastrService.success('Trash bags submitted successfully', 'Success');
      }),
      catchError((error) => {
        this.toastrService.warning("Error submitting trash bags", "Error");
        return throwError(error);
      })
    );
  }

  // Method for user login.
  public login(userLogin: IUserLogin): Observable<User> {
    return this.http.post<User>(USER_LOGIN_URL, userLogin).pipe(
      tap({
        next: (user) => {
          this.setUserToLocalStorage(user); // Store user data in local storage.
          this.userSubject.next(user); // Update the userSubject with the new user data.
          this.toastrService.success(
            `Welcome to YS Cleanup!`,
            'Login Successful'
          );
        },
        error: (errorResponse) => {
          this.toastrService.error(errorResponse.error, 'Login Failed');
        },
      })
    );
  }

  // Method for user registration.
  public register(userRegister: IUserRegister): Observable<User> {
    return this.http.post<User>(USER_REGISTER_URL, userRegister).pipe(
      tap({
        next: (user) => {
          this.setUserToLocalStorage(user); // Store user data in local storage.
          this.userSubject.next(user); // Update the userSubject with the new user data.
          this.toastrService.success(
            `Welcome to YS Cleanup!`,
            `Register successful`
          );
        },
        error: (errorResponse) => {
          this.toastrService.error(errorResponse.error, 'Register Failed');
        },
      })
    );
  }

  // Method for user logout.
  public logout() {
    this.userSubject.next(new User()); // Clear user data in the userSubject.
    localStorage.removeItem(USER_KEY); // Remove user data from local storage.
    window.location.reload(); // Reload the application to reset the state.
  }

  // Private method to set user data in local storage.
  private setUserToLocalStorage(user: User) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  // Private method to get user data from local storage.
  private getUserFromLocalStorage(): User {
    const userJson = localStorage.getItem(USER_KEY);
    if (userJson) return JSON.parse(userJson) as User;
    return new User();
  }
}
