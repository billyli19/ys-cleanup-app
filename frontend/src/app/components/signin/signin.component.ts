import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  constructor(private formBuilder: FormBuilder){}

  public signinFormGroup: FormGroup = this.signinForm();

  private signinForm(): FormGroup {
    return this.formBuilder.group({
      email : new FormControl('', Validators.required),
      password : new FormControl('', Validators.required),
    })
  }

  hide = true;

  getErrorMessage(){

  }

  onSubmit() {
    console.log(this.signinFormGroup.value);
  }
}
