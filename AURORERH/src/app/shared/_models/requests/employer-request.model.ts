
export class EmployerRequestModel{
  constructor (
    public  adresse: string,
    public  date_debut: string,
    public  date_fin: string,
    public  date_naissance: string,
    public  id: number,
    public  lieu_naissance: string,
    public  matricule: string,
    public  nationalite: string,
    public  nbr_enfant: number,
    public  nom: string,
    public  numero: number,
    public  photo: string,
    public  poste: string,
    public  prenom: string,
    public  profession: string,
    public  sexe: string,
    public  statut_matrimoniale: string,
    public  type_contrat: string,
    public  ville_exertion: string

  )
  {

  }

}
