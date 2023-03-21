import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ADD_FORMATIONS } from 'src/app/shared/_elements/api_constante';
import { FormationRequestModel } from 'src/app/shared/_models/requests/formation-request.model';
import { FormationService } from 'src/app/shared/_services/formation.service';
import { NotificationService } from 'src/app/shared/_services/notification.service';

@Component({
  selector: 'app-modal-formation',
  templateUrl: './modal-formation.component.html',
  styleUrls: ['./modal-formation.component.css']
})
export class ModalFormationComponent implements OnInit {

  public isLoggedIn = false;
  public isLoginFailed = false;
  public formFormation!: FormGroup;
  public submitted!: boolean;
  public isLoading!: boolean;

  constructor(
    private formationService: FormationService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private notif: NotificationService,
    private dialogRef: MatDialogRef<ModalFormationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.initFormFormation();
  }

  public initFormFormation() {
    this.formFormation = this.fb.group({
      theme_form: [this.data ? this.data.theme_form :  '', Validators.required],
        description: [this.data ? this.data.description: '', Validators.required],
        duree:[this.data ? this.data.duree: '', Validators.required],
        photo:[this.data ? this.data.photo: ''],
        date_publication:[this.data? this.data.date_publication: '', Validators.required],
        id:[this.data ? this.data.id: null],
    });
}

get f() { return this.formFormation.controls; }

addFormation(){
  this.submitted = true;
  this.isLoading = true;
  if (this.formFormation.invalid) {
      this.isLoading = !this.isLoading;
      return;
  }
  console.log('f',this.f)
  console.log( 'fb',this.fb)
  let dto;
  dto = new FormationRequestModel(
    this.f.id.value,
   this.f.theme_form.value,
   this.f.description.value,
   this.f.duree.value,
   this.f.date_publication.value,
   this.f.photo.value,
    )
    console.log('avant', dto)
  this.formationService.post(ADD_FORMATIONS,dto )
  .then((response: any) =>{
  console.log('response', response)
  this.isLoading = !this.isLoading;
  this.notif.success('Ajout avec sucsess ')
  if (this.notif ){
    window.location.reload();
}
  },err => {
    console.log(err)
    this.notif.danger('Echec lors de ajout');
    this.isLoading = !this.isLoading;
    this.isLoginFailed = true;
})
}

}
