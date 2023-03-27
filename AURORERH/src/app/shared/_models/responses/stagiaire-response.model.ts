export class StagiaireResponseModel {
  constructor(

    public id: number,
    public codeStage: string,
    public nom: string,
    public prenom: string,
    public photo: string,
    public date_naissance: string,
    public lieu_naissance: string,
    public statut_matrimoniale: string,
    public adresse: string,
    public numero: number,
    public ecole: string,
    public date_debut: string,
    public date_fin: string,
    public annee_academique: string,
    public nationalite: string,
    public matricule: string,
    public sexe: string,
    public departement: string,
    public duree: string,
  ) { }
}
