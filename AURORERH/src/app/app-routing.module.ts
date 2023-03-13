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
import { ListingEmployerComponent } from './Pages/listing-employer/listing-employer.component';
import { ListingSanctionComponent } from './Pages/listing-sanction/listing-sanction.component';
import { ListingStagiaireComponent } from './Pages/listing-stagiaire/listing-stagiaire.component';
import { LoginComponent } from './session/login/login.component';
import { UserGuardService } from './shared/_helpers/user-guard.service';

const routes: Routes = [
{path:'session/login', component:LoginComponent},
{
  path:'', component:MainComponent, canActivate: [UserGuardService],
  children:[
    {path:'', component:DashboardComponent},
    {path:'listing-employer', component:ListingEmployerComponent },
    {path: 'ajout-employer', component:AjoutEmployerComponent},
    {path: 'ajout-employer/:id', component:AjoutEmployerComponent},
    {path: 'affich-employer/:id',component:AffichEmployerComponent},

    {path: 'listing-contrat', component:ListingContratComponent},
    {path: 'ajout-contrat', component:AjoutContratComponent},
    {path: 'affich-contrat/:id', component:AffichContratComponent},
    {path: 'ajout-contrat/:id', component:AjoutContratComponent},

    {path: 'listing-sanction', component:ListingSanctionComponent},

    {path: 'listing-conger', component:ListingCongerComponent},

    {path:'listing-stagiaire', component:ListingStagiaireComponent},
    {path:'affich-stagiaire/:id', component:AffichStagiaireComponent}
  ]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
