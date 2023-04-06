import { Component, OnInit } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import {FormGroup } from '@angular/forms';
import {FormBuilder } from '@angular/forms';
import { EmployerService } from '../shared/_services/employer.service';
import { LIST_CONGERS, LIST_CONTRATS, LIST_EMPLOYERS, LIST_FORMATIONS } from '../shared/_elements/api_constante';
import { EmployerReponseModel } from '../shared/_models/responses/employer-response.model';
import { ContratService } from '../shared/_services/contrat.service';
import { ContratResponseModel } from '../shared/_models/responses/contrat-response.model';
import { FormationResponseModel } from '../shared/_models/responses/formation-response.model';
import { FormationService } from '../shared/_services/formation.service';
import { CongerService } from '../shared/_services/conger.service';
import { CongerResponseModel } from '../shared/_models/responses/conger-response.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  public employers: EmployerReponseModel[] = [];
  public contrats: ContratResponseModel[] = [];
  public formations: FormationResponseModel[] = [];
  public congers: CongerResponseModel[] = [];
  public totalElements: any;
  public token = '';
  public page = 0;
  public size = 5;
  public statut = '';

  constructor(
    private employerService: EmployerService,
    private contratService: ContratService,
    private formationService: FormationService,
    private congerService: CongerService,
  ) { }

  ngOnInit(): void {
    this.getEmployer(this.token);
    this.getContrat(this.token);
    this.getFormation(this.token);
    this.getConger(this.token);
  }


  getEmployer(token: any) {
    this.employerService.get(`${LIST_EMPLOYERS}?token=${token}&statut=${this.statut}&page=${this.page}&size=${this.size}`).then((response: any) => {
      this.employers = response.data.totalElements;
      this.totalElements = response.data.totalElements;

      console.log(response);
      console.log(this.employers);
    }
    )
  }

  getContrat(token: any){
    this.contratService.get(`${LIST_CONTRATS}?token=${token}&page=${this.page}&size=${this.size}`).then((response:any)=>{
      this.contrats = response.data.totalElements;
      this.totalElements = response.data.totalElements;
      console.log(response);
      console.log(this.contrats)
    }
    )
  }

  getFormation(token: any){
    this.formationService.get(`${LIST_FORMATIONS}?token=${token}&page=${this.page}&size=${this.size}`).then((response:any)=>{
      this.formations = response.data.totalElements;
      this.totalElements = response.data.totalElements;
      console.log(response);
      console.log(this.formations)
    }
    )
  }

  getConger(token: any){
    this.congerService.get(`${LIST_CONGERS}?token=${token}&page=${this.page}&size=${this.size}` ).then((response:any)=>{
      this.congers =response.data.totalElements;
      this.totalElements = response.data.statut.totalElements;
      console.log(response);
      console.log(this.congers)
    }
    )
  }



}
