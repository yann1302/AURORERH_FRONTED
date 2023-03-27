export class DemandeFormRequestModel {
  constructor(
    public id: number,
    public date_demande: string,
    public statut: string,
    public id_Employer: number,
    public id_Formation: number
  ) { }
}


