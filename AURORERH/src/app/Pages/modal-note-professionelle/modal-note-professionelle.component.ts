import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ADD_NOTEPROFESSIONNELLES } from 'src/app/shared/_elements/api_constante';
import { NoteProfessionnellesRequestModel } from 'src/app/shared/_models/requests/noteProfessionnel-request.model';
import { NoteProfessionnelleService } from 'src/app/shared/_services/noteProfessionnelle.service';
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
    this.initFormNP(null);
  }

  public initFormNP(data: any) {
    this.formNP = this.fb.group({
        theme: [data ? data.theme :  '', Validators.required],
        description: [data ? data.matricule: '', Validators.required],
        date_publication:[data ? data.date_publication: '', Validators.required],
        photo:[data ? data.photo: ''],
        id:[data ? data.id: null],
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
