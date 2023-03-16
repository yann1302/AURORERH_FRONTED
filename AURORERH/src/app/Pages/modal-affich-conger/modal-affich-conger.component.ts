import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { LIST_CONGERS } from 'src/app/shared/_elements/api_constante';
import { CongerResponseModel } from 'src/app/shared/_models/responses/conger-response.model';
import { EmployerReponseModel } from 'src/app/shared/_models/responses/employer-response.model';
import { CongerService } from 'src/app/shared/_services/conger.service';
import { EmployerService } from 'src/app/shared/_services/employerService';
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
  }


  getConger(){
    this.congerService.get(LIST_CONGERS).then((response:any)=>{
      this.congers = response.data;
      console.log(this.congers)
    }
    )
  }
}
