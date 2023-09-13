import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signinForm!: FormGroup;
  hide = true;
  returnUrl = '';

  constructor(
    private formBuilder: FormBuilder, 
    private userService:UserService,
    private activatedRoute: ActivatedRoute, 
    private router:Router
  ) { }

  ngOnInit(): void {
    this.signinForm = this.formBuilder.group({
      email : new FormControl('', [Validators.required, Validators.email]),
      password : new FormControl('', Validators.required),
    })

    // this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'];
    // this.router.navigateByUrl(this.returnUrl);
    // console.log('returnUrl:' + this.returnUrl);
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
    // alert(`email: ${this.formControls['email'].value},
    // password:${this.formControls['password'].value}`);
  }
}
