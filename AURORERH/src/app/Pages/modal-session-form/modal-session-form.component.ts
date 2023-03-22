import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { EmployerReponseModel } from 'src/app/shared/_models/responses/employer-response.model';
import { FormationResponseModel } from 'src/app/shared/_models/responses/formation-response.model';
import { EmployerService } from 'src/app/shared/_services/employerService';
import { FormationService } from 'src/app/shared/_services/formation.service';
import { NotificationService } from 'src/app/shared/_services/notification.service';
import { SessionFormationService } from 'src/app/shared/_services/sessionFormation.service';

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
  }

  public initFormSanction(){
    this.formSessionForm =this.fb.group({
    type_sanction:[this.data ? this.data.type_sanction: '', Validators.required],
    debut_sanction:[this.data ? moment(this.data.debut_sanction, 'yyyy-MM-dd'):  Validators.required],
    fin_sanction:[this.data ?  moment(this.data.fin_sanction, 'yyyy-MM-dd'):  Validators.required],
    description:[this.data ? this.data.description: '', Validators.required],
    statut:[this.data ? this.data.statut: '', Validators.required],
    id_Employer:[this.data ? this.data.employerResponseDTO.id: '', Validators.required],
    id:[this.data ? this.data.id: null ],
    });
  }
}
