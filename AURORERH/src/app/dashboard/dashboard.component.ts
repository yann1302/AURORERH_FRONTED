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
  public chartOptionsElt: any;
  router: any;

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
    this.chartOptions;
    console.log('chartoption', this.chartOptions )
  }



  chartOptions: any = {
    title: {
      text: "Nombre d'employés par mois",
      fontColor: "rgb(43, 113, 252)"
    },
    axisY:{
      interlacedColor: "rgb(255,250,250)",

    },
    data: [{
      type: "column",
      color: "rgb(43, 113, 252)",
      dataPoints: [
        // { label: "Janvier", y: 1 },
        // { label: "Fevrier", y: 5},
        // { label: "Mars", y: 0 },
        // { label: "Avril", y: 5 },
        // { label: "Mai", y: 5 },
        // { label: "Juin", y: 8 },
        // { label: "Juillet", y: 8 },
        // { label:  "Aout", y: 4 },
        // { label: "Septembre", y: 2},
        // { label: "Octorbre", y: 3},
        // { label: "Novembre", y:1},
        // { label: "Decembre", y: 3}
      ]
    }]
  };

  chartOptions1: any = {
    title: {
      text: "Nombre d'employés par mois",
      fontColor: "rgb(43, 113, 252)"
    },
    axisY:{
      interlacedColor: "rgb(255,250,250)",

    },
    data: [{
      type: "pie",
      startAngle: 25,
      toolTipContent: "<b>{label}</b>: {y}%",
      showInLegend: "true",
      legendText: "{label}",
      indexLabelFontSize: 16,
      indexLabel: "{label} - {y}%",
      dataPoints: [
        { y: 51.08, label: "Chrome" },
        { y: 27.34, label: "Internet Explorer" },

      ]
    }]
  };


  getEmployer(token: any) {
    this.employerService.get(`${LIST_EMPLOYERS}?token=${token}&statut=${this.statut}&page=${this.page}&size=${this.size}`).then((response: any) => {
      this.employers = response.data.totalElements; // Nombre total d'employés
      const employersByMonth: { [key: string]: number } = {};

      // Itérer sur la liste des employés et compter le nombre d'employés par mois
      for (const employer of response.data.content) {
        const month = new Date(employer.date_debut).toLocaleString('default', { month: 'long' }); // Récupérer le mois de la date d'embauche de l'employé
        if (!employersByMonth[month]) {
          employersByMonth[month] = 1;
        } else {
          employersByMonth[month]++;
        }
      }

      this.chartOptions.data[0].dataPoints = [];
      // Itérer sur le tableau des employés par mois et créer un nouvel objet dataPoint pour chaque mois
      for (const month in employersByMonth) {
        if (employersByMonth.hasOwnProperty(month)) {
          const employees = {label: month, y: employersByMonth[month]};
          this.chartOptions.data[0].dataPoints.push(employees);
        }
      }

      console.log(response);
      console.log('chart', this.chartOptions.data);

      // this.chartOptionsElt = {};
      // this.chartOptions.data[0].dataPoints.forEach((elt: any) => {

      //   this.chartOptionsElt[elt.x]= elt.y;
      //   console.log('chartOptionsElt text ',this.chartOptionsElt);
      // });
    });
  }

  // getEmployer(token: any) {
  //   this.employerService.get(`${LIST_EMPLOYERS}?token=${token}&statut=${this.statut}&page=${this.page}&size=${this.size}`).then((response: any) => {
  //     this.employers = response.data.totalElements;
  //     this.totalElements = response.data.totalElements;


  //     console.log(response);
  //     console.log(this.employers);
  //   }
  //   )
  // }

  getContrat(token: any){
    this.contratService.get(`${LIST_CONTRATS}?token=${token}&page=${this.page}&size=${this.size}`).then((response:any)=>{
      this.contrats = response.data.totalElements;
      //this.totalElements = response.data.totalElements;
      console.log(response);
      console.log(this.contrats)
    }
    )
  }

  getFormation(token: any){
    this.formationService.get(`${LIST_FORMATIONS}?token=${token}&page=${this.page}&size=${this.size}`).then((response:any)=>{
      this.formations = response.data.totalElements;
      //this.totalElements = response.data.totalElements;
      console.log(response);
      console.log(this.formations)
    }
    )
  }

  getConger(token: any){
    this.congerService.get(`${LIST_CONGERS}?token=${token}&page=${this.page}&size=${this.size}` ).then((response:any)=>{
      this.congers =response.data.totalElements;
      //this.totalElements = response.data.statut.totalElements;
      console.log(response);
      console.log(this.congers)
    }
    )
  }

  goTi() {
    this.router.navigate(['/listing-employer'])
  }

}
