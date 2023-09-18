import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home-page/home.component';
import { LoginComponent } from './components/pages/login-page/login.component';
import { NotfoundComponent } from './components/pages/notfound-page/notfound.component';
import { RegisterComponent } from './components/pages/register-page/register.component';
import { SigninComponent } from './components/pages/signin-page/signin.component';
import { StepperComponent } from './components/pages/stepper-page/stepper.component';
import { LeaderboardComponent } from './components/pages/leaderboard-page/leaderboard.component';

const routes: Routes = [
  {
    component: LoginComponent,
    path: ''
  },
  {
    component: RegisterComponent,
    path: 'register'
  },
  {
    component: SigninComponent,
    path: 'signin'
  },
  {
    component: HomeComponent,
    path: 'home'
  },
  {
    component: StepperComponent,
    path: 'stepper'
  },
  {
    component: LeaderboardComponent,
    path: 'leaderboard'
  },
  {
    component: NotfoundComponent,
    path: '**',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
