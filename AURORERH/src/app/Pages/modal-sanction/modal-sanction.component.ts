import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { ADD_SANCTIONS, LIST_EMPLOYERS, LIST_SANCTIONS, READBYID_SANCTIONS } from 'src/app/shared/_elements/api_constante';
import { SanctionRequestModel } from 'src/app/shared/_models/requests/sanction-request.model';
import { EmployerReponseModel } from 'src/app/shared/_models/responses/employer-response.model';
import { SanctionResponseModel } from 'src/app/shared/_models/responses/sanction-response.model';
import { EmployerService } from 'src/app/shared/_services/employerService';
import { NotificationService } from 'src/app/shared/_services/notification.service';
import { SanctionService } from 'src/app/shared/_services/sanctionService';


@Component({
  selector: 'app-modal-sanction',
  templateUrl: './modal-sanction.component.html',
  styleUrls: ['./modal-sanction.component.css']
})
export class ModalSanctionComponent implements OnInit {

  public formSanction!: FormGroup;
  public submitted!: boolean;
  public isLoading!: boolean;
  public isLoggedIn = false;
  public isLoginFailed = false;
  public employers: EmployerReponseModel[] = [];
  id: any;


  constructor(
    private sanctionService: SanctionService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private notif: NotificationService,
    private employerService: EmployerService,
    private dialogRef: MatDialogRef<ModalSanctionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log('data1', this.data)
  }

  ngOnInit(): void {
    this.initFormSanction();
    this.getEmployer();
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    // this.editSanction(this.id);
    // console.log('data', this.data)
  }

  //editSanction(id:number){
  //   this.sanctionService.get(`${READBYID_SANCTIONS}/${id}`)
  //   .then((response:any)=>{
  //     console.log('response', response)
  //     this.initFormSanction(response.data)
  //   });
  // }

  public initFormSanction(){
    this.formSanction =this.fb.group({
    type_sanction:[this.data ? this.data.type_sanction: '', Validators.required],
    debut_sanction:[this.data ? moment(this.data.debut_sanction, 'yyyy-MM-dd'):  Validators.required],
    fin_sanction:[this.data ?  moment(this.data.fin_sanction, 'yyyy-MM-dd'):  Validators.required],
    description:[this.data ? this.data.description: '', Validators.required],
    statut:[this.data ? this.data.statut: '', Validators.required],
    id_Employer:[this.data ? this.data.employerResponseDTO.id: '', Validators.required],
    id:[this.data ? this.data.id: null ],
    });
  }

  get f() { return this.formSanction.controls; }

  addSanction(){
    this.submitted = true;
    this.isLoading = true;
    if (this.formSanction.invalid) {
        this.isLoading = !this.isLoading;
        return;
    }
    console.log('f',this.f)
    console.log( 'fb',this.fb)
    let dto;
    dto = new SanctionRequestModel(
      this.f.id.value,
      this.f. type_sanction.value,
      this.f.debut_sanction.value,
      this.f.fin_sanction.value,
      this.f.description.value,
      this.f.statut.value,
      this.f.id_Employer.value
      )
      console.log('avant', dto)
    this.sanctionService.post(ADD_SANCTIONS,dto )
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

public sanctions: SanctionResponseModel[] = [];
getSanction(){
  this.sanctionService.get(LIST_SANCTIONS).then((response:any)=>{
    this.sanctions = response.data;
    console.log(this.sanctions)
  }
  )
}

getEmployer(){
  this.employerService.get(LIST_EMPLOYERS).then((response:any)=>{
    this.employers = response.data;
    console.log(this.employers)
  }
  )
}

}
