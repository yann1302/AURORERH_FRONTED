export class ContratRequestModel {
  constructor(
    public id: number,
    public nom: string,
    public prenom: string,
    public lieu_recrutememnt: string,
    public date_embauche: string,
    public periode_essaie: string,
    public debut_periode_essaie: string,
    public fin_periode_essaie: string,
    public type_contrat: string,
    public poste: string,
    public lieu_travail: string,
    public salaire_brut: string,
    public etat_civil: string,
    public statut: string,
    public liste_diplo: string,
    public document: string,
    public id_Employer: number,

  ) { }
}
