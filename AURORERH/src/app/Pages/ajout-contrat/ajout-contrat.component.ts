import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ADD_CONTRATS, LIST_EMPLOYERS, READBYID_CONTRATS } from 'src/app/shared/_elements/api_constante';
import { ContratRequestModel } from 'src/app/shared/_models/requests/contrat-request.model';
import { EmployerReponseModel } from 'src/app/shared/_models/responses/employer-response.model';
import { ContratService } from 'src/app/shared/_services/contratService';
import { EmployerService } from 'src/app/shared/_services/employerService';
import { NotificationService } from 'src/app/shared/_services/notification.service';

@Component({
  selector: 'app-ajout-contrat',
  templateUrl: './ajout-contrat.component.html',
  styleUrls: ['./ajout-contrat.component.css']
})
export class AjoutContratComponent implements OnInit {

  public formContrat!: FormGroup;
  public submitted!: boolean;
  public isLoading!: boolean;
  public isLoggedIn = false;
  public isLoginFailed = false;
  public employers: EmployerReponseModel[] = [];
  id: any;



  constructor(
    private notif: NotificationService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private contratService: ContratService,
    private employerService: EmployerService,
  ) { }

  ngOnInit(): void {
    this.initFormContrat(null);
    this.getEmployer();
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.editContrat(this.id);

  }


editContrat(id:number){
  this.contratService.get(`${READBYID_CONTRATS}/${id}`)
  .then((response:any)=>{
    console.log('response', response)
    this.initFormContrat(response.data)
  });
}


public initFormContrat(data: any){
  this.formContrat = this.fb.group({
    lieu_recrutememnt:[data ? data.lieu_recrutememnt: ''],
    date_embauche:[data ? data.date_embauche: ''],
    periode_essaie:[data ? data.periode_essaie: ''],
    debut_periode_essaie:[data ? data.debut_periode_essaie: ''],
    fin_periode_essaie:[data ? data.fin_periode_essaie: ''],
    type_contrat:[data ? data.type_contrat: ''],
    poste:[data ? data.poste: ''],
    lieu_travail:[data ? data.lieu_travail: ''],
    salaire_brut:[data ? data.salaire_brut: ''],
    etat_civil:[data ? data.etat_civil: ''],
    statut:[data ? data.statut: ''],
    id_Employer:[data ? data.id_Employer: ''],
    id:[data ? data.id: null ],
  })
}

get f() { return this.formContrat.controls; }
  addContrat(){
    this.submitted = true;
    this.isLoading = true;
    if (this.formContrat.invalid) {
        this.isLoading = !this.isLoading;
        return;
    }
    console.log('f',this.f)
    console.log( 'fb',this.fb)
    let dto;
    dto = new ContratRequestModel(
      this.f.id.value,
      this.f.nom.value,
      this.f.prenom.value,
      this.f.lieu_recrutememnt.value,
      this.f.date_embauche.value,
      this.f.periode_essaie.value,
      this.f.debut_periode_essaie.value,
      this.f.fin_periode_essaie.value,
      this.f.type_contrat.value,
      this.f.poste.value,
      this.f.lieu_travail.value,
      this.f.salaire_brut.value,
      this.f.etat_civil.value,
      this.f.statut.value,
      this.f.id_Employer.value
      )
      console.log('avant', dto)
    this.contratService.post(ADD_CONTRATS,dto )
    .then((response: any) =>{
    console.log('response', response)
    this.isLoading = !this.isLoading;
    this.notif.success('Ajout avec sucsess ')
    if (this.notif ){
      this.router.navigate(['/listing-contrat']).then(() => {});
  }
    },err => {
      console.log(err)
      this.notif.danger('Echec lors de ajout');
      this.isLoading = !this.isLoading;
      this.isLoginFailed = true;
  })
}

getEmployer(){
  this.employerService.get(LIST_EMPLOYERS).then((response:any)=>{
    this.employers = response.data;
    console.log(this.employers)
  }
  )
}
goTi(){
  this.router.navigate(['/listing-contrat'])
}


}
