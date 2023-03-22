import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
import { AffichContratComponent } from './Pages/affich-contrat/affich-contrat.component';
import { AffichEmployerComponent } from './Pages/affich-employer/affich-employer.component';
import { AffichStagiaireComponent } from './Pages/affich-stagiaire/affich-stagiaire.component';
import { AjoutContratComponent } from './Pages/ajout-contrat/ajout-contrat.component';
import { AjoutEmployerComponent } from './Pages/ajout-employer/ajout-employer.component';
import { ListingCongerComponent } from './Pages/listing-conger/listing-conger.component';
import { ListingContratComponent } from './Pages/listing-contrat/listing-contrat.component';
import { ListingDemandeFormComponent } from './Pages/listing-demande-form/listing-demande-form.component';
import { ListingEmployerComponent } from './Pages/listing-employer/listing-employer.component';
import { ListingFormationComponent } from './Pages/listing-formation/listing-formation.component';
import { ListingNoteProfessionnelleComponent } from './Pages/listing-note-professionnelle/listing-note-professionnelle.component';
import { ListingSanctionComponent } from './Pages/listing-sanction/listing-sanction.component';
import { ListingSessionFormationComponent } from './Pages/listing-session-formation/listing-session-formation.component';
import { ListingStagiaireComponent } from './Pages/listing-stagiaire/listing-stagiaire.component';
import { LoginComponent } from './session/login/login.component';
import { UserGuardService } from './shared/_helpers/user-guard.service';

const routes: Routes = [
{path:'session/login', component:LoginComponent},
{
  path:'', component:MainComponent, canActivate: [UserGuardService],
  children:[
    //employés
    {path:'', component:DashboardComponent},
    {path:'listing-employer', component:ListingEmployerComponent },
    {path: 'ajout-employer', component:AjoutEmployerComponent},
    {path: 'ajout-employer/:id', component:AjoutEmployerComponent},
    {path: 'affich-employer/:id',component:AffichEmployerComponent},

    //contrats
    {path: 'listing-contrat', component:ListingContratComponent},
    {path: 'ajout-contrat', component:AjoutContratComponent},
    {path: 'affich-contrat/:id', component:AffichContratComponent},
    {path: 'ajout-contrat/:id', component:AjoutContratComponent},

    //sanctions
    {path: 'listing-sanction', component:ListingSanctionComponent},

    //conger
    {path: 'listing-conger', component:ListingCongerComponent},

    //stagiaire
    {path:'listing-stagiaire', component:ListingStagiaireComponent},
    {path:'affich-stagiaire/:id', component:AffichStagiaireComponent},

    //noteProfessionnelle
    {path:'listing-noteProfessionelle', component:ListingNoteProfessionnelleComponent},

    //formation
    {path:'listing-formation', component:ListingFormationComponent},

    //les demandes de formation
    {path:'listing-demandeForm', component:ListingDemandeFormComponent},

    //les sessions de formations
    {path: 'listing-session', component:ListingSessionFormationComponent}

  ]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
