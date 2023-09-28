// Import necessary Angular modules and components.
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Import the routing module.
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr'; // Import a third-party Toastr module for displaying notifications.

// Import Angular Material modules for UI components.
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';

// Import components used in the application.
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home-page/home.component';
import { LoginComponent } from './components/pages/login-page/login.component';
import { NotfoundComponent } from './components/pages/notfound-page/notfound.component';
import { RegisterComponent } from './components/pages/register-page/register.component';
import { SigninComponent } from './components/pages/signin-page/signin.component';
import { BottomBarComponent } from './components/partials/bottom-bar/bottom-bar.component';
import { StepperComponent } from './components/pages/stepper-page/stepper.component';
import { LeaderboardComponent } from './components/pages/leaderboard-page/leaderboard.component';
import { ImageDetailsService } from './services/image-details.service';
import { LeaderboardService } from './services/leaderboard.service';

@NgModule({
  declarations: [
    // Declare all the application components.
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SigninComponent,
    NotfoundComponent,
    HomeComponent,
    BottomBarComponent,
    StepperComponent,
    LeaderboardComponent
  ],
  imports: [
    // Import and configure Angular and third-party modules.
    BrowserModule,
    AppRoutingModule, // Import the routing module.
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatSelectModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: "toast-bottom-right",
      newestOnTop: false
    }), // Configure Toastr module for notifications.
    MatStepperModule,
    MatTabsModule
  ],
  providers: [LeaderboardService, ImageDetailsService],
  bootstrap: [AppComponent] // Specify the root component for bootstrapping the application.
})
export class AppModule { }
