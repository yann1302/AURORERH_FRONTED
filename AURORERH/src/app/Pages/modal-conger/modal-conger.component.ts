import { Component, OnInit, Inject, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployerReponseModel } from 'src/app/shared/_models/responses/employer-response.model';
import { CongerService } from 'src/app/shared/_services/conger.service';
import { EmployerService } from 'src/app/shared/_services/employerService';
import { NotificationService } from 'src/app/shared/_services/notification.service';

@Component({
  selector: 'app-modal-conger',
  templateUrl: './modal-conger.component.html',
  styleUrls: ['./modal-conger.component.css']
})
export class ModalCongerComponent implements OnInit {

  public formConger!: FormGroup;
  public submitted!: boolean;
  public isLoading!: boolean;
  public isLoggedIn = false;
  public isLoginFailed = false;
  public employers: EmployerReponseModel[] = [];
  id: any;

  constructor(
    private congerService: CongerService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private notif: NotificationService,
    private employerService: EmployerService,
    private dialogRef: MatDialogRef<ModalCongerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any

  ) { }

  ngOnInit(): void {
  }

  public initFormConger(data: any){
    this.formConger =this.fb.group({
    type_conger:[data ? data.type_conger: '', Validators.required],
    debut_conger:[data ? data.debut_conger: '', Validators.required],
    fin_sanction:[data ? data.fin_sanction: '', Validators.required],
    date_reprise:[data ? data.date_reprise: '', Validators.required],
    etablissement_conger:[data ? data.etablissement_conger: '', Validators.required],
    validation:[data ? data.validation: '', Validators.required],
    description:[data ? data.description: '', Validators.required],
    statut:[data ? data.statut: '', Validators.required],
    id_Employer:[data ? data.id_Employer: '', Validators.required],
    id:[data ? data.id: null ],
    });
  }

}
