import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ADD_STAGIAIRE } from 'src/app/shared/_elements/api_constante';
import { StagiaireRequestModel } from 'src/app/shared/_models/requests/stagiaire-request-model';
import { NotificationService } from 'src/app/shared/_services/notification.service';
import { StagiaireService } from 'src/app/shared/_services/stagiaireService';
import { ModalSanctionComponent } from '../modal-sanction/modal-sanction.component';

@Component({
  selector: 'app-modal-stagiaire',
  templateUrl: './modal-stagiaire.component.html',
  styleUrls: ['./modal-stagiaire.component.css']
})
export class ModalStagiaireComponent implements OnInit {

  public isLoading!: boolean;
  public isLoggedIn = false;
  public isLoginFailed = false;
  public formStagiaire!: FormGroup;
  public submitted!: boolean;

  constructor(
    private fb: FormBuilder,
    private stagiaireService: StagiaireService,
    private notif: NotificationService,
    private route: ActivatedRoute,
    private dialogRef: MatDialogRef<ModalSanctionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.initFormStagiaire()
  }

  public initFormStagiaire(){
    this.formStagiaire = this.fb.group({
    id:[this.data ? this.data.id: null ],
    nom:[this.data ? this.data.nom: '', Validators.required ],
    prenom:[this.data ? this.data.prenom: '' ],
    photo:[this.data ? this.data.photo: '' ],
    date_naissance:[this.data ? this.data.date_naissance: '' ],
    lieu_naissance:[this.data ? this.data.lieu_naissance: '' ],
    statut_matrimoniale:[this.data ? this.data.statut_matrimoniale: '' ],
    adresse:[this.data ? this.data.adresse: '' ],
    numero:[this.data ? this.data.numero: '' ],
    ecole:[this.data ? this.data.ecole: '' ],
    date_debut:[this.data ? this.data.date_debut: '' ],
    date_fin:[this.data ? this.data.date_fin: '' ],
    annee_academique:[this.data ? this.data.annee_academique: '', Validators.required  ],
    nationalite:[this.data ? this.data.nationalite: '' ],
    matricule:[this.data ? this.data.matricule: '' , Validators.required],
    sexe:[this.data ? this.data.sexe: '' ],
    departement:[this.data ? this.data.departement: '', Validators.required ],
    duree:[this.data ? this.data.duree: '', Validators.required ],

    });
  }


  get f() { return this.formStagiaire.controls; }
  addStagiaire(){
    this.submitted = true;
    this.isLoading = true;
    if (this.formStagiaire.invalid) {
        this.isLoading = !this.isLoading;
        return;
    }
    console.log('f',this.f)
    console.log( 'fb',this.fb)
    let dto;
    dto = new StagiaireRequestModel(
      this.f.id.value,
      this.f.nom.value,
      this.f.prenom.value,
      this.f.photo.value,
      this.f.date_naissance.value,
      this.f.lieu_naissance.value,
      this.f.statut_matrimoniale.value,
      this.f.adresse.value,
      this.f.numero.value,
      this.f.ecole.value,
      this.f.date_debut.value,
      this.f.date_fin.value,
      this.f.annee_academique.value,
      this.f.nationalite.value,
      this.f.matricule.value,
      this.f.sexe.value,
      this.f.departement.value,
      this.f.duree.value,
      )
      console.log('avant', dto)
    this.stagiaireService.post(ADD_STAGIAIRE,dto )
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
}
