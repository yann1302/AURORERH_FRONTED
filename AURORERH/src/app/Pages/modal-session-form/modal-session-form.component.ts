import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { ADD_SESSIONFORMATIONS, LIST_EMPLOYERS, LIST_FORMATIONS } from 'src/app/shared/_elements/api_constante';
import { SessionFormationRequestModel } from 'src/app/shared/_models/requests/sessionFormation-request.model';
import { EmployerReponseModel } from 'src/app/shared/_models/responses/employer-response.model';
import { FormationResponseModel } from 'src/app/shared/_models/responses/formation-response.model';
import { EmployerService } from 'src/app/shared/_services/employer.service';
import { FormationService } from 'src/app/shared/_services/formation.service';
import { NotificationService } from 'src/app/shared/_services/notification.service';
import { SessionFormationService } from 'src/app/shared/_services/session-Formation.service';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
@Component({
  selector: 'app-modal-session-form',
  templateUrl: './modal-session-form.component.html',
  styleUrls: ['./modal-session-form.component.css']
})
export class ModalSessionFormComponent implements OnInit {
  public formSessionForm!: FormGroup;
  public submitted!: boolean;
  public isLoading!: boolean;
  public isLoggedIn = false;
  public isLoginFailed = false;
  public employers: EmployerReponseModel[] = [];
  public formations: FormationResponseModel[] = [];
  id: any;

  constructor(
    private sessionFormationService: SessionFormationService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private notif: NotificationService,
    private employerService: EmployerService,
    private formationService: FormationService,
    private sessionService: SessionFormationService,
    private dialogRef: MatDialogRef<ModalSessionFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.getEmployer();
    this.getFormation();
    this.initFormSession();

  }

  getEmployer(){
    this.employerService.get(LIST_EMPLOYERS).then((response:any)=>{
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

  public initFormSession(){
    this.formSessionForm =this.fb.group({
    formateur:[this.data ? this.data.formateur: ''],
    debut_form:[this.data ? this.data.debut_sanction : '', Validators.required  ],
    fin_form:[this.data ?  this.data.fin_sanction : '', Validators.required   ],
    description:[this.data ? this.data.description: ''],
    // statut:[this.data ? this.data.statut: ''],
    employers:[this.data ? this.data.employers: '', Validators.required  ],
    formation_id:[this.data ? this.data.formationResponseDTO.id: '', Validators.required  ],
    themeForm:[this.data ? this.data.themeForm: '', Validators.required  ],
    reference:[this.data ? this.data.reference: '', Validators.required  ],
    id:[this.data ? this.data.id: '' ],
    });
  }

  get f() { return this.formSessionForm.controls; }

  addSessionForm(){
    this.submitted = true;
    this.isLoading = true;
    if (this.formSessionForm.invalid) {
        this.isLoading = !this.isLoading;
        return;
    }
    console.log('f',this.f)
    console.log( 'fb',this.fb)
    let dto;
    dto = new SessionFormationRequestModel(
      this.f.id.value,
      this.f.debut_form.value,
      this.f.fin_form.value,
      this.f.formateur.value,
      this.f.description.value,
      this.f.employers.value,
      this.f.formation_id.value,
      this.f.themeForm.value,
      this.f.reference.value,
      )
      console.log('avant', dto)
    this.sessionService.post(ADD_SESSIONFORMATIONS,dto )
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
