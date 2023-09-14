import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signinForm!: FormGroup;
  hide = true;
  returnUrl = '/home';

  constructor(
    private formBuilder: FormBuilder, 
    private userService:UserService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.signinForm = this.formBuilder.group({
      email : new FormControl('', [Validators.required, Validators.email]),
      password : new FormControl('', Validators.required),
    })
  }

  get formControls(){
    return this.signinForm.controls;
  }

  onSubmit() {
    console.log(this.signinForm.value);
    this.userService.login({email:this.formControls['email'].value, 
      password:this.formControls['password'].value}).subscribe(() => {
        this.router.navigateByUrl(this.returnUrl);
      }
    );
  }
}
