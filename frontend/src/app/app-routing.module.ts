// Import necessary modules and components from Angular and your application.
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home-page/home.component';
import { LoginComponent } from './components/pages/login-page/login.component';
import { NotfoundComponent } from './components/pages/notfound-page/notfound.component';
import { RegisterComponent } from './components/pages/register-page/register.component';
import { SigninComponent } from './components/pages/signin-page/signin.component';
import { StepperComponent } from './components/pages/stepper-page/stepper.component';
import { LeaderboardComponent } from './components/pages/leaderboard-page/leaderboard.component';
import { AuthGuard } from './auth/guards/auth.guard';

// Define the application's routes using the Routes interface.
const routes: Routes = [
  {
    component: LoginComponent, // Component to render when the path is empty.
    path: ''
  },
  {
    component: RegisterComponent, // Component to render when the path is 'register'.
    path: 'register'
  },
  {
    component: SigninComponent, // Component to render when the path is 'signin'.
    path: 'signin'
  },
  {
    component: HomeComponent, // Component to render when the path is 'home'.
    path: 'home',
    canActivate: [AuthGuard] // Use the AuthGuard to protect access to this route.
  },
  {
    component: StepperComponent, // Component to render when the path is 'stepper'.
    path: 'stepper',
    canActivate: [AuthGuard] // Use the AuthGuard to protect access to this route.
  },
  {
    component: LeaderboardComponent, // Component to render when the path is 'leaderboard'.
    path: 'leaderboard',
    canActivate: [AuthGuard] // Use the AuthGuard to protect access to this route.
  },
  {
    component: NotfoundComponent, // Component to render when the path is anything else.
    path: '**',
    pathMatch: 'full' // Ensure the path matches exactly for this route.
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configure the router with the defined routes.
  exports: [RouterModule] // Export the configured router module.
})
export class AppRoutingModule { }
