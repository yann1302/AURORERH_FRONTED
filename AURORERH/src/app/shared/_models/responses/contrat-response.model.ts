import { EmployerReponseModel } from "./employer-response.model";

export class ContratResponseModel{
  constructor(
    public id: number,
    public nom: String,
    public  prenom: String,
    public lieu_recrutememnt: String,
    public date_embauche: Date,
    public periode_essaie: String,
    public debut_periode_essaie: Date,
    public fin_periode_essaie: Date,
    public  type_contrat: String,
    public poste: String,
    public lieu_travail: String,
    public salaire_brut: String,
    public etat_civil: String,
    public statut: String,
    public  liste_diplo:String,
    public  document:String,
    public employerResponseDTO: EmployerReponseModel,
  ){}
  }
