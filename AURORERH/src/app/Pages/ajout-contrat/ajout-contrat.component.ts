import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { ADD_CONTRATS, LIST_EMPLOYERS, READBYID_CONTRATS, UPDATE_CONTRATS } from 'src/app/shared/_elements/api_constante';
import { ContratRequestModel } from 'src/app/shared/_models/requests/contrat-request.model';
import { EmployerReponseModel } from 'src/app/shared/_models/responses/employer-response.model';
import { ContratService } from 'src/app/shared/_services/contrat.service';
import { EmployerService } from 'src/app/shared/_services/employer.service';
import { NotificationService } from 'src/app/shared/_services/notification.service';

@Component({
  selector: 'app-ajout-contrat',
  templateUrl: './ajout-contrat.component.html',
  styleUrls: ['./ajout-contrat.component.css']
})
export class AjoutContratComponent implements OnInit {
  type_contrat: string = '';
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
    this.formContrat.get('periode_essaie')?.valueChanges.subscribe(() => {
      this.updateDates();
    });

    this.formContrat.get('duree_cdd')?.valueChanges.subscribe(() => {
      this.updateDates1();
    });
  }

  updateDates() {
    const nbMoisConge = parseInt(this.formContrat.value.periode_essaie, 10);
    if (isNaN(nbMoisConge)) {
      return;
    }
    const dateDebut = new Date();
    dateDebut.setDate(dateDebut.getDate() + 1);
    this.formContrat.patchValue({
      debut_essaie: moment(dateDebut).format('YYYY-MM-DD'),
    });
    const dateFin = new Date(dateDebut);
    dateFin.setMonth(dateFin.getMonth() + nbMoisConge - 1);
    this.formContrat.patchValue({
      fin_essaie: moment(dateFin).format('YYYY-MM-DD'),
    });
  }

  updateDates1() {
    const anneesContrat = parseInt(this.formContrat.value.duree_cdd, 10);
    if (isNaN(anneesContrat)) {
      return;
    }
    const dateDebut = new Date();
    dateDebut.setDate(dateDebut.getDate() + 1);
    this.formContrat.patchValue({
      debut_periode_essaie: moment(dateDebut).format('YYYY-MM-DD'),
    });
    const dateFin = new Date(dateDebut);
    dateFin.setFullYear(dateFin.getFullYear() + anneesContrat - 1);
    this.formContrat.patchValue({
      fin_periode_essaie: moment(dateFin).format('YYYY-MM-DD'),
    });
  }




  editContrat(id: number) {
    this.contratService.get(`${READBYID_CONTRATS}/${id}`)
      // let dto;
      // dto = new ContratRequestModel(
      //   this.f.id.value,
      //   this.f.nom.value,
      //   this.f.prenom.value,
      //   this.f.lieu_recrutememnt.value,
      //   this.f.date_embauche.value,
      //   this.f.periode_essaie.value,
      //   this.f.debut_periode_essaie.value,
      //   this.f.fin_periode_essaie.value,
      //   this.f.type_contrat.value,
      //   this.f.poste.value,
      //   this.f.lieu_travail.value,
      //   this.f.salaire_brut.value,
      //   this.f.etat_civil.value,
      //   this.f.statut.value,
      //   this.f.liste_diplo.value,
      //   this.f.document.value,
      //   this.f.id_Employer.value
      //   )
      // this.contratService.put(UPDATE_CONTRATS, dto)
      .then((response: any) => {
        console.log('response', response)
        this.initFormContrat(response.data)
      });
  }


  public initFormContrat(data: any) {
    this.formContrat = this.fb.group({
      nom: [data ? data.nom : ''],
      prenom: [data ? data.prenom : ''],
      lieu_recrutememnt: [data ? data.lieu_recrutememnt : ''],
      date_embauche: [data ? data.date_embauche : ''],
      periode_essaie: [data ? data.periode_essaie : ''],
      debut_periode_essaie: [data ? data.debut_periode_essaie : ''],
      fin_periode_essaie: [data ? data.fin_periode_essaie : ''],
      debut_essaie: [data ? data.debut_essaie : ''],
      fin_essaie: [data ? data.fin_essaie : ''],
      type_contrat: [data ? data.type_contrat : ''],
      poste: [data ? data.poste : ''],
      lieu_travail: [data ? data.lieu_travail : ''],
      salaire_brut: [data ? data.salaire_brut : ''],
      etat_civil: [data ? data.etat_civil : ''],
      statut: [data ? data.statut : 'EN COURS'],
      liste_diplo: [data ? data.liste_diplo : ''],
      id_Employer: [data ? data.employerResponseDTO.id : ''],
      document: [data ? data.document : ''],
      congerAnnuel: [data ? data.congerAnnuel : ''],
      duree_cdd: [data ? data.duree_cdd : ''],

      id: [data ? data.id : null],
    })
  }

  get f() { return this.formContrat.controls; }
  addContrat() {
    this.submitted = true;
    this.isLoading = true;
    if (this.formContrat.invalid) {
      this.isLoading = !this.isLoading;
      return;
    }
    console.log('f', this.f)
    console.log('fb', this.fb)
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
      this.f.debut_essaie.value,
      this.f.fin_essaie.value,
      this.f.type_contrat.value,
      this.f.poste.value,
      this.f.lieu_travail.value,
      this.f.salaire_brut.value,
      this.f.etat_civil.value,
      this.f.statut.value,
      this.f.liste_diplo.value,
      this.f.document.value,
      this.f.id_Employer.value,
      this.f.congerAnnuel.value,
      this.f.duree_cdd.value
    )
    console.log('avant', dto)
    this.contratService.post(ADD_CONTRATS, dto)
      .then((response: any) => {
        console.log('response', response)
        this.isLoading = !this.isLoading;
        this.notif.success('Ajout avec sucsess ')
        if (this.notif) {
          this.router.navigate(['/listing-contrat']).then(() => { });
        }
      }, err => {
        console.log(err)
        this.notif.danger('Echec lors de ajout');
        this.isLoading = !this.isLoading;
        this.isLoginFailed = true;
      })
  }

  getEmployer() {
    this.employerService.get(LIST_EMPLOYERS).then((response: any) => {
      this.employers = response.data.content;
      console.log(this.employers)
    }
    )
  }
  goTi() {
    this.router.navigate(['/listing-contrat'])
  }


}
