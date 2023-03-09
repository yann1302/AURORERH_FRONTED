import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {


  signIn!:string;
  password!: string;
  email!:string;
  name!:string;
  repeatPassword!:string;

  signInForm!:FormGroup;
  submited!:boolean

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm()
    console.log(this.signInForm)
  }


  initForm(){
    this.signInForm = this.fb.group({
      email: ['', Validators.compose([Validators.required])],
      name: ['', Validators.compose([Validators.required])],
      signIn: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
      repeatPassword: ['', Validators.compose([Validators.required])],
    });
   }

   onSave(){
    this.submited = true
    if(this.signInForm.invalid){
      console.log(this.signInForm)
      return;
    }
   }
}
