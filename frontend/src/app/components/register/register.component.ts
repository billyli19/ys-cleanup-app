import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private formBuilder: FormBuilder) {}

  public registerFormGroup: FormGroup = this.registerForm();

  private registerForm(): FormGroup {
    return this.formBuilder.group({
      name : new FormControl('', Validators.required),
      email : new FormControl('', [Validators.email, Validators.required]),
      password : new FormControl('', Validators.required),
      confirmPassword : new FormControl('', Validators.required),
      organisation : new FormControl('', Validators.required),
    })
  }

  passwordsMatch(): boolean {
    const password = this.registerFormGroup.get('password')?.value;
    const confirmPassword = this.registerFormGroup.get('confirmPassword')?.value;
    return password === confirmPassword;
  }

  hide = true;

  // getErrorMessage(){
  //   console.log('this is an error');
  // }

  onSubmit() {
    console.log(this.registerFormGroup.value);
  }
}