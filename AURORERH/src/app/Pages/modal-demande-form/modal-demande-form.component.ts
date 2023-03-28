import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ADD_DEMANDEFORMATION, LIST_EMPLOYERS, LIST_FORMATIONS } from 'src/app/shared/_elements/api_constante';
import { DemandeFormRequestModel } from 'src/app/shared/_models/requests/demandeForm-request.model';
import { EmployerReponseModel } from 'src/app/shared/_models/responses/employer-response.model';
import { FormationResponseModel } from 'src/app/shared/_models/responses/formation-response.model';
import { DemandeFormService } from 'src/app/shared/_services/demande-Form.service';
import { EmployerService } from 'src/app/shared/_services/employer.service';
import { FormationService } from 'src/app/shared/_services/formation.service';
import { NotificationService } from 'src/app/shared/_services/notification.service';

@Component({
  selector: 'app-modal-demande-form',
  templateUrl: './modal-demande-form.component.html',
  styleUrls: ['./modal-demande-form.component.css']
})
export class ModalDemandeFormComponent implements OnInit {

  public isLoggedIn = false;
  public isLoginFailed = false;
  public formDemandeForm!: FormGroup;
  public submitted!: boolean;
  public isLoading!: boolean;
  public employers: EmployerReponseModel[] = [];
  public formations: FormationResponseModel[] = [];

  constructor(
    private demandeFormService: DemandeFormService,
    private employerService: EmployerService,
    private formationService: FormationService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private notif: NotificationService,
    private dialogRef: MatDialogRef<ModalDemandeFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.initFormDemandeForm();
    this.getEmployer();
    this.getFormation();

  }

  public initFormDemandeForm() {
    this.formDemandeForm = this.fb.group({
        statut:[this.data ? this.data.statut: 'en attentes'],
        date_demande:[this.data? this.data.date_demande: '', Validators.required],
        id:[this.data ? this.data.id: ''],
        id_Employer:[this.data ? this.data.employerResponseDTO.id: '', Validators.required],
        id_Formation:[this.data ? this.data.formationResponseDTO.id: '', Validators.required],
    });
}

get f() { return this.formDemandeForm.controls; }

addDemandeForm(){

  this.submitted = true;
  this.isLoading = true;
  if (this.formDemandeForm.invalid) {
      this.isLoading = !this.isLoading;
      return;
  }
  console.log('f',this.f)
  console.log( 'fb',this.fb)
  let dto;
  dto = new DemandeFormRequestModel(
    this.f.id.value,
    this.f.date_demande.value,
    this.f.statut.value,
    this.f.id_Employer.value,
    this.f.id_Formation.value,
    )
    console.log('avant', dto)
  this.demandeFormService.post(ADD_DEMANDEFORMATION,dto )
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

getEmployer(){
  this.employerService.get(LIST_EMPLOYERS).then((response:any) =>{
    this.employers = response.data.content;
    console.log(this.employers)
  }
  )
}

getFormation(){
  this.formationService.get(LIST_FORMATIONS).then((response:any)=>{
    this.formations = response.data.content;
    console.log(this.formations)
  }
  )
}

}
