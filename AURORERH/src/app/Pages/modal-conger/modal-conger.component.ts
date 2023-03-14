import { Component, OnInit, Inject, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { LIST_EMPLOYERS } from 'src/app/shared/_elements/api_constante';
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
    this.getEmployer();
  }

  public initFormConger(data: any){
    this.formConger =this.fb.group({
    type_conger:[data ? data.type_conger: '', Validators.required],
    date_debut:[data ? data.debut_conger: '', Validators.required],
    date_fin:[data ? data.fin_conger: '', Validators.required],
    date_reprise:[data ? data.date_reprise: '', Validators.required],
    etablissement_conger:[data ? data.etablissement_conger: '', Validators.required],
    validation:[data ? data.validation: ''],
    description:[data ? data.description: '', Validators.required],
    statut:[data ? data.statut: ''],
    id_Employer:[data ? data.id_Employer: '', Validators.required],
    id:[data ? data.id: null ],
    });
  }

getEmployer(){
  this.employerService.get(LIST_EMPLOYERS).then((response:any)=>{
    this.employers = response.data;
    console.log(this.employers)
  }
  )
}

}
