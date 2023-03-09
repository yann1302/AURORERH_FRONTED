import { Component, OnInit } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import {FormGroup } from '@angular/forms';
import {FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userName!: string;
  userSurname!:string;
  userEmail!: string;
  
  form!:FormGroup;
  submited!:boolean

  constructor( private fb:FormBuilder) { }

  ngOnInit(): void {
    this.initForm()
    console.log(this.form);
  }

  onSubmitForm(form:NgForm):void {
    console.log(form.value);


  }

initForm(){
  this.form = this.fb.group({
    nom:['', Validators.required  ],
    prenom:['', Validators.required],
    email:['',Validators.required ]
  })
}

onSave(){
  this.submited = true
  if(this.form.invalid){
    console.log(this.form)
    return;
  }
}

}
