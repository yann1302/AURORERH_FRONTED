
export class EmployerRequestModel {
  constructor(
    public id: number,
    public codeEmployer: string,
    public nom: string,
    public prenom: string,
    public photo: string,
    public date_naissance: string,
    public lieu_naissance: string,
    public statut_matrimoniale: string,
    public adresse: string,
    public numero: number,
    public type_contrat: string,
    public date_debut: string,
    public date_fin: string,
    public ville_exertion: string,
    public nationalite: string,
    public matricule: string,
    public sexe: string,
    public nbr_enfant: number,
    public profession: string,
    public poste: string,
    public username: string,
    public password: string,
    public email: string,
    public statut: string,

  ) {

  }

}
