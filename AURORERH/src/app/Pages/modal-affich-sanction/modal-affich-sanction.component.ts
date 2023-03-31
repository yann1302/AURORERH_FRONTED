import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LIST_SANCTIONS } from 'src/app/shared/_elements/api_constante';
import { EmployerReponseModel } from 'src/app/shared/_models/responses/employer-response.model';
import { SanctionResponseModel } from 'src/app/shared/_models/responses/sanction-response.model';
import { EmployerService } from 'src/app/shared/_services/employer.service';
import { SanctionService } from 'src/app/shared/_services/sanction.service';


@Component({
  selector: 'app-modal-affich-sanction',
  templateUrl: './modal-affich-sanction.component.html',
  styleUrls: ['./modal-affich-sanction.component.css']
})
export class ModalAffichSanctionComponent implements OnInit {

  public formSanction!: FormGroup;
  public submitted!: boolean;
  public isLoading!: boolean;
  public isLoggedIn = false;
  public isLoginFailed = false;
  public employers: EmployerReponseModel[] = [];
  public sanctions: SanctionResponseModel[] = [];
  id: any;


  constructor(
    private sanctionService: SanctionService,
    private employerService: EmployerService,
    private dialogRef: MatDialogRef<ModalAffichSanctionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log('data1', this.data)
  }

  ngOnInit(): void {
  }


getSanction(){
  this.sanctionService.get(LIST_SANCTIONS).then((response:any)=>{
    this.sanctions = response.data;
    console.log(this.sanctions)
  }
  )
}

}
