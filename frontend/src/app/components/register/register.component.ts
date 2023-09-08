import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  imports: [
    MatFormFieldModule
  ],
  exports: [
    MatFormFieldModule
  ]
})

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

}
