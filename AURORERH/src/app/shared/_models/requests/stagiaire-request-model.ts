

export class StagiaireRequestModel{
constructor(
  public id: number,
  public codeStage: string,
  public  nom:string,
  public  prenom:string,
  public  photo:string,
  public  date_naissance:Date,
  public  lieu_naissance:string,
  public  statut_matrimoniale:string,
  public  adresse:string,
  public  numero: number,
  public  ecole:string,
  public  date_debut:Date,
  public   date_fin:Date,
  public  annee_academique:string,
  public  nationalite:string,
  public  matricule:string,
  public  sexe:string,
  public  departement:string,
  public  duree:string,
){}
}
