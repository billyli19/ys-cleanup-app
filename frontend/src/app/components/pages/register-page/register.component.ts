import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { IUserRegister } from 'src/app/shared/interfaces/IUserRegister';
import { PasswordMatchValidator } from 'src/app/shared/validators/password_match_validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  returnUrl = '/home';
  hide = true;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name : new FormControl('', Validators.required),
      email : new FormControl('', [Validators.email, Validators.required]),
      password : new FormControl('', Validators.required),
      confirmPassword : new FormControl('', Validators.required),
      organisation : new FormControl('', Validators.required),
    }, {
      Validators: PasswordMatchValidator('password', 'confirmPassword')
    });
  }

  get formControls() {
    return this.registerForm.controls;
  }

  onSubmit() {
    if(this.registerForm.invalid) return;

    const formValues = this.registerForm.value;
    const user: IUserRegister = {
      name: formValues.name,
      email: formValues.email,
      password: formValues.password,
      confirmPassword: formValues.confirmPassword,
      organisation: formValues.organisation
    };

    this.userService.register(user).subscribe(_ => {
      this.router.navigateByUrl(this.returnUrl);
    });
  }
}