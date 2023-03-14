
export class EmployerRequestModel{
  constructor (
    public  id:number,
    public  nom:String,
    public  prenom:String,
    public  photo:String,
    public  date_naissance:Date,
    public  lieu_naissance:String,
    public  statut_matrimoniale:String,
    public  adresse:String,
    public  numero:number,
    public  type_contrat:String,
    public  date_debut:Date,
    public   date_fin:Date,
    public  ville_exertion:String,
    public  nationalite:String,
    public  matricule:String,
    public  sexe:String,
    public  nbr_enfant:number,
    public  profession:String,
    public  poste:String,
    public  username:String,
    public  password:String

  )
  {

  }

}
