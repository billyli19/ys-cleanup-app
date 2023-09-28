// Import necessary Angular modules and components.
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr'; // Import a third-party Toastr module for displaying notifications.
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
import { LoginComponent } from './components/pages/login-page/login.component';
import { RegisterComponent } from './components/pages/register-page/register.component';
import { SigninComponent } from './components/pages/signin-page/signin.component';
import { NotfoundComponent } from './components/pages/notfound-page/notfound.component';
import { HomeComponent } from './components/pages/home-page/home.component';
import { BottomBarComponent } from './components/partials/bottom-bar/bottom-bar.component';
import { StepperComponent } from './components/pages/stepper-page/stepper.component';
import { LeaderboardComponent } from './components/pages/leaderboard-page/leaderboard.component';

// Import services
import { ImageDetailsService } from './services/image-details.service';
import { LeaderboardService } from './services/leaderboard.service';

// Import the routing module.
import { AppRoutingModule } from './app-routing.module';

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
    LeaderboardComponent,
  ],
  imports: [
    // Import and configure Angular and third-party modules.
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatStepperModule,
    MatTabsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      newestOnTop: false,
    }), // Configure Toastr module for notifications.
    AppRoutingModule, // Import the routing module.
  ],
  providers: [LeaderboardService, ImageDetailsService],
  bootstrap: [AppComponent], // Specify the root component for bootstrapping the application.
})
export class AppModule {}
