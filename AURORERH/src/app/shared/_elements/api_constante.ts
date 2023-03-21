

import { environment } from 'src/environments/environment';

//le serveur
export const SERVEUR = `${environment.apiUrl}`;

//authentification
export const AUTH = SERVEUR + 'auth/login';

//les employés
export const EMPLOYERS = SERVEUR + 'employer';
export const LIST_EMPLOYERS = EMPLOYERS + '/read';
export const ADD_EMPLOYER = EMPLOYERS + '/create';
export const UPDATE_EMPLOYER = EMPLOYERS + '/update';
export const DELETE_EMPLOYER = EMPLOYERS + '/delete';
export const READ_EMPLOYER = EMPLOYERS + '/read';
export const READBYID_EMPLOYER = EMPLOYERS + '/read';


//les contrats
export const CONTRATS = SERVEUR + 'contrat';
export const LIST_CONTRATS = CONTRATS + '/read';
export const ADD_CONTRATS = CONTRATS + '/create';
export const UPDATE_CONTRATS = CONTRATS + '/update';
export const DELETE_CONTRATS = CONTRATS + '/delete';
export const READ_CONTRATS = CONTRATS + '/read';
export const READBYID_CONTRATS = CONTRATS + '/read';

//les sanctions
export const SANCTIONS = SERVEUR + 'sanction';
export const LIST_SANCTIONS = SANCTIONS + '/read';
export const ADD_SANCTIONS = SANCTIONS + '/create';
export const UPDATE_SANCTIONS = SANCTIONS + '/update';
export const DELETE_SANCTIONS = SANCTIONS + '/delete';
export const READ_SANCTIONS = SANCTIONS + '/read';
export const READBYID_SANCTIONS = SANCTIONS + '/read';

//les congers
export const CONGERS = SERVEUR + 'conger';
export const LIST_CONGERS = CONGERS + '/read';
export const ADD_CONGERS = CONGERS + '/create';
export const UPDATE_CONGERS = CONGERS + '/update';
export const DELETE_CONGERS = CONGERS + '/delete';
export const READ_CONGERS = CONGERS + '/read';
export const READBYID_CONGERS = CONGERS + '/read';

//les stagiaire
export const STAGIAIRE = SERVEUR + 'stagiaire';
export const LIST_STAGIAIRE = STAGIAIRE + '/read';
export const ADD_STAGIAIRE= STAGIAIRE + '/create';
export const UPDATE_STAGIAIRE = STAGIAIRE + '/update';
export const DELETE_STAGIAIRE = STAGIAIRE + '/delete';
export const READ_STAGIAIRE= STAGIAIRE + '/read';
export const READBYID_STAGIAIRE = STAGIAIRE + '/read';

//les notes professionnelles
export const NOTEPROFESSIONNELLES = SERVEUR + 'noteProfessionel';
export const LIST_NOTEPROFESSIONNELLES = NOTEPROFESSIONNELLES + '/read';
export const ADD_NOTEPROFESSIONNELLES= NOTEPROFESSIONNELLES + '/create';
export const UPDATE_NOTEPROFESSIONNELLES = NOTEPROFESSIONNELLES + '/update';
export const DELETE_NOTEPROFESSIONNELLES = NOTEPROFESSIONNELLES + '/delete';
export const READ_NOTEPROFESSIONNELLES= NOTEPROFESSIONNELLES + '/read';
export const READBYID_NOTEPROFESSIONNELLES = NOTEPROFESSIONNELLES + '/read';

//les formations
export const FORMATIONS = SERVEUR + 'formation';
export const LIST_FORMATIONS = FORMATIONS + '/read';
export const ADD_FORMATIONS= FORMATIONS + '/create';
export const UPDATE_FORMATIONS = FORMATIONS + '/update';
export const DELETE_FORMATIONS = FORMATIONS + '/delete';
export const READ_FORMATIONS= FORMATIONS + '/read';
export const READBYID_FORMATIONS = FORMATIONS + '/read';

//les Sessions de formation
export const SESSIONFORMATIONS = SERVEUR + 'employerFormation';
export const LIST_SESSIONFORMATIONS = SESSIONFORMATIONS + '/read';
export const ADD_SESSIONFORMATIONS = SESSIONFORMATIONS + '/create';
export const UPDATE_SESSIONFORMATIONS = SESSIONFORMATIONS + '/update';
export const DELETE_SESSIONFORMATIONS = SESSIONFORMATIONS + '/delete';
export const READ_SESSIONFORMATIONS= SESSIONFORMATIONS + '/read';
export const READBYID_SESSIONFORMATIONS = SESSIONFORMATIONS + '/read';


//les Demandes de formation
export const DEMANDEFORMATION = SERVEUR + 'DemandeFormation';
export const LIST_DEMANDEFORMATION = DEMANDEFORMATION + '/read';
export const ADD_DEMANDEFORMATION = DEMANDEFORMATION + '/create';
export const UPDATE_DEMANDEFORMATION = DEMANDEFORMATION + '/update';
export const DELETE_DEMANDEFORMATION = DEMANDEFORMATION + '/delete';
export const READ_DEMANDEFORMATION= DEMANDEFORMATION + '/read';
export const READBYID_DEMANDEFORMATION = DEMANDEFORMATION + '/read';
