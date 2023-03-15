import { CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './session/login/login.component';
import { SigninComponent } from './session/signin/signin.component';
import { ToastrModule } from 'ngx-toastr';
import { UserGuardService } from './shared/_helpers/user-guard.service';
import { authInterceptorProviders } from './shared/_helpers/auth.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AjoutEmployerComponent } from './Pages/ajout-employer/ajout-employer.component';
import { AffichEmployerComponent } from './Pages/affich-employer/affich-employer.component';
import { ListingContratComponent } from './Pages/listing-contrat/listing-contrat.component';
import { AjoutContratComponent } from './Pages/ajout-contrat/ajout-contrat.component';
import { AffichContratComponent } from './Pages/affich-contrat/affich-contrat.component';
import { ListingSanctionComponent } from './Pages/listing-sanction/listing-sanction.component';
import { ModalSanctionComponent } from './Pages/modal-sanction/modal-sanction.component';
import {MatDialogModule} from '@angular/material/dialog';
import * as fr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
import { ListingCongerComponent } from './Pages/listing-conger/listing-conger.component';
import { ModalCongerComponent } from './Pages/modal-conger/modal-conger.component';
import { ListingStagiaireComponent } from './Pages/listing-stagiaire/listing-stagiaire.component';
import { ModalStagiaireComponent } from './Pages/modal-stagiaire/modal-stagiaire.component';
import { AffichStagiaireComponent } from './Pages/affich-stagiaire/affich-stagiaire.component';
import { ListingNoteProfessionnelleComponent } from './Pages/listing-note-professionnelle/listing-note-professionnelle.component';
import { ModalNoteProfessionelleComponent } from './Pages/modal-note-professionelle/modal-note-professionelle.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    DashboardComponent,
    MainComponent,
    LoginComponent,
    SigninComponent,
    AjoutEmployerComponent,
    AffichEmployerComponent,
    ListingContratComponent,
    AjoutContratComponent,
    AffichContratComponent,
    ListingSanctionComponent,
    ModalSanctionComponent,
    ListingCongerComponent,
    ModalCongerComponent,
    ListingStagiaireComponent,
    ModalStagiaireComponent,
    AffichStagiaireComponent,
    ListingNoteProfessionnelleComponent,
    ModalNoteProfessionelleComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    ToastrModule.forRoot(),
    MatDialogModule


  ],
  providers: [
    UserGuardService,
    authInterceptorProviders,
    AjoutEmployerComponent,
    { provide: LOCALE_ID, useValue: 'fr-FR'}

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {
   constructor() {
  registerLocaleData(fr.default);
} }
