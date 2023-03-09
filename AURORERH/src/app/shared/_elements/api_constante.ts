

import { environment } from 'src/environments/environment';

//le serveur
export const SERVEUR = `${environment.apiUrl}`;

//les employés
export const EMPLOYERS = SERVEUR + 'employer';
export const LIST_EMPLOYERS = EMPLOYERS + '/read';
export const ADD_EMPLOYER = EMPLOYERS + '/create';
export const UPDATE_EMPLOYER = EMPLOYERS + '/update';
export const DELETE_EMPLOYER = EMPLOYERS + '/delete';
export const READ_EMPLOYER = EMPLOYERS + '/read';
export const READBYID_EMPLOYER = EMPLOYERS + '/read';

export const AUTH = SERVEUR + 'auth/login';

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
