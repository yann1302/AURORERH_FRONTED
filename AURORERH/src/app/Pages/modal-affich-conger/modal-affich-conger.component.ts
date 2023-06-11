import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ADD_CONGERS, LIST_CONGERS } from 'src/app/shared/_elements/api_constante';
import { CongerRequestModel } from 'src/app/shared/_models/requests/conger-request.model';
import { CongerResponseModel } from 'src/app/shared/_models/responses/conger-response.model';
import { EmployerReponseModel } from 'src/app/shared/_models/responses/employer-response.model';
import { CongerService } from 'src/app/shared/_services/conger.service';
import { EmployerService } from 'src/app/shared/_services/employer.service';
import { NotificationService } from 'src/app/shared/_services/notification.service';

@Component({
  selector: 'app-modal-affich-conger',
  templateUrl: './modal-affich-conger.component.html',
  styleUrls: ['./modal-affich-conger.component.css']
})
export class ModalAffichCongerComponent implements OnInit {

  public formConger!: FormGroup;
  public submitted!: boolean;
  public isLoading!: boolean;
  public isLoggedIn = false;
  public isLoginFailed = false;
  public employers: EmployerReponseModel[] = [];
  public congers: CongerResponseModel[] = [];
  id: any;

  constructor(
    private congerService: CongerService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private notif: NotificationService,
    private employerService: EmployerService,
    private dialogRef: MatDialogRef<ModalAffichCongerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    console.log('data1', this.data)
  }
  ngOnInit(): void {
    this.initFormConger();
  }


  getConger(){
    this.congerService.get(LIST_CONGERS).then((response:any)=>{
      this.congers = response.data;
      console.log(this.congers)
    }
    )
  }

  public initFormConger(){
    this.formConger =this.fb.group({
    type_conger:[this.data ? this.data.type_conger: '',Validators.required],
    date_debut:[this.data ? this.data.date_debut: '',Validators.required],
    date_fin:[this.data ? this.data.date_fin: '',Validators.required],
    date_reprise:[this.data ? this.data.date_reprise: '',Validators.required],
    etablissement_conger:[this.data ? this.data.etablissement_conger: ''],
    validation:[this.data ? this.data.validation: 'en attente d\'une réponse'],
    description:[this.data ? this.data.description: '',Validators.required],
    statut:[this.data ? this.data.statut: 'en attente d`une réponse'],
    jours:[this.data ? this.data.jours: '',Validators.required],
    id_Employer:[this.data ? this.data.employerResponseDTO.id: ''],
    id:[this.data ? this.data.id: '' ],
    });
  }

  get f() { return this.formConger.controls; }

  addConger(){
    this.submitted = true;
    this.isLoading = true;
    if (this.formConger.invalid) {
        this.isLoading = !this.isLoading;
        return;
    }
    console.log('f',this.f)
    console.log( 'fb',this.fb)
    let dto;
    dto = new CongerRequestModel(
      this.f.id.value,
      this.f.date_debut.value,
      this.f.date_fin.value,
      this.f.type_conger.value,
      this.f.date_reprise.value,
      this.f.etablissement_conger.value,
      this.f.validation.value,
      this.f.statut.value,
      this.f.description.value,
      this.f.jours.value,
      this.f.dureeMatern.value,
      this.f.dateDebutMatern.value,
      this.f.dateFinMatern.value,
      this.f.id_Employer.value,

      )
      console.log('avant', dto)
    this.congerService.post(ADD_CONGERS,dto )
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
