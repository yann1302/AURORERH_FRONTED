import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ADD_NOTEPROFESSIONNELLES } from 'src/app/shared/_elements/api_constante';
import { NoteProfessionnellesRequestModel } from 'src/app/shared/_models/requests/noteProfessionnel-request.model';
import { NoteProfessionnelleService } from 'src/app/shared/_services/note-Professionnelle.service';
import { NotificationService } from 'src/app/shared/_services/notification.service';

@Component({
  selector: 'app-modal-note-professionelle',
  templateUrl: './modal-note-professionelle.component.html',
  styleUrls: ['./modal-note-professionelle.component.css']
})
export class ModalNoteProfessionelleComponent implements OnInit {

  public isLoggedIn = false;
  public isLoginFailed = false;
  public formNP!: FormGroup;
  public submitted!: boolean;
  public isLoading!: boolean;
  constructor(
    private noteProfessionnelleService: NoteProfessionnelleService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private notif: NotificationService,
    private dialogRef: MatDialogRef<ModalNoteProfessionelleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.initFormNP();
  }

  public initFormNP() {
    this.formNP = this.fb.group({
        theme: [this.data ? this.data.theme :  '', Validators.required],
        description: [this.data ? this.data.description: '', Validators.required],
        date_publication:[this.data ? this.data.date_publication:  new Date()],
        photo:[this.data ? this.data.photo: ''],
        id:[this.data ? this.data.id: null],
    });
}

get f() { return this.formNP.controls; }

addNP(){
  this.submitted = true;
  this.isLoading = true;
  if (this.formNP.invalid) {
      this.isLoading = !this.isLoading;
      return;
  }
  console.log('f',this.f)
  console.log( 'fb',this.fb)
  let dto;
  dto = new NoteProfessionnellesRequestModel(
    this.f.id.value,
    this.f. theme.value,
    this.f.description.value,
    this.f.date_publication.value,
    this.f.photo.value,
    )
    console.log('avant', dto)
  this.noteProfessionnelleService.post(ADD_NOTEPROFESSIONNELLES,dto )
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
