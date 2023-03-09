import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ADD_EMPLOYER, READBYID_EMPLOYER, UPDATE_EMPLOYER } from 'src/app/shared/_elements/api_constante';
import { EmployerRequestModel } from 'src/app/shared/_models/requests/employer-request.model';
import { EmployerReponseModel } from 'src/app/shared/_models/responses/employer-response.model';
import { EmployerService } from 'src/app/shared/_services/employerService';
import { NotificationService } from 'src/app/shared/_services/notification.service';

@Component({
  selector: 'app-ajout-employer',
  templateUrl: './ajout-employer.component.html',
  styleUrls: ['./ajout-employer.component.css']
})
export class AjoutEmployerComponent implements OnInit {

  public isLoggedIn = false;
  public isLoginFailed = false;
  public formEmployer!: FormGroup;
  public submitted!: boolean;
  public isLoading!: boolean;
  public id!: any;


  constructor(
    private employerService: EmployerService,
    private notif: NotificationService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.initFormEmployer(null);
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.editEmployer(this.id);
  }

  editEmployer(id:number){
    this.employerService.get(`${READBYID_EMPLOYER}/${id}`)
    .then((response:any)=>{
      console.log('response', response)
      this.initFormEmployer(response.data)
    });
  }

  get f() { return this.formEmployer.controls; }

  public initFormEmployer(data: any) {
    this.formEmployer = this.fb.group({
        nom: [data ? data.nom :  '', Validators.required],
        matricule: [data ? data.matricule: '', Validators.required],
        adresse:[data ? data.adresse: ''],
        date_debut:[data ?data.date_debut: ''],
        date_fin:[data ? data.date_fin: ''],
        date_naissance:[data ? data.date_naissance: ''],
        id:[data ? data.id: ''],
        lieu_naissance:[data ? data.lieu_naissance: ''],
        nationalite:[data ? data.nationalite: ''],
        nbr_enfant:[data ? data.nbr_enfant: ''],
        numero:[data ? data.numero: ''],
        photo:[data ? data.photo: ''],
        poste:[data ? data.poste: '', Validators.required],
        prenom:[data ? data.prenom: ''],
        profession:[data ? data.profession: '', Validators.required],
        sexe:[data ? data.sexe: ''],
        statut_matrimoniale:[data ? data.statut_matrimoniale: ''],
        type_contrat:[data ? data.type_contrat: '', Validators.required],
        ville_exertion:[data ? data.ville_exertion: '', Validators.required],

    });
}
  addEmployer(){
    this.submitted = true;
    this.isLoading = true;
    if (this.formEmployer.invalid) {
        this.isLoading = !this.isLoading;
        return;
    }
    console.log('f',this.f)
    console.log( 'fb',this.fb)
    let dto;
    dto = new EmployerRequestModel(
      this.f.adresse.value,
      this.f.date_debut.value,
      this.f.date_fin.value,
      this.f.date_naissance.value,
      this.f.id.value,
      this.f.lieu_naissance.value,
      this.f.matricule.value,
      this.f.nationalite.value,
      this.f.nbr_enfant.value,
      this.f.nom.value,
      this.f.numero.value,
      this.f.photo.value,
      this.f.poste.value,
      this.f.prenom.value,
      this.f.profession.value,
      this.f.sexe.value,
      this.f.statut_matrimoniale.value,
      this.f.type_contrat.value,
      this.f.ville_exertion.value
      )
      console.log('avant', dto)
    this.employerService.post(ADD_EMPLOYER,dto )
    .then((response: any) =>{
    console.log('response', response)
    this.isLoading = !this.isLoading;
    this.notif.success('Ajout avec sucsess ')
    if (this.notif ){
      this.router.navigate(['/listing-employer']).then(() => {});
  }
    },err => {
      console.log(err)
      this.notif.danger('Echec lors de ajout');
      this.isLoading = !this.isLoading;
      this.isLoginFailed = true;
  })
}


goTi(){
  this.router.navigate(['/listing-employer'])
}
}
