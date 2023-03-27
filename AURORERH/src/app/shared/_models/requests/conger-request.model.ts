export class CongerRequestModel {
  constructor(
    public id: number,
    public date_debut: string,
    public date_fin: string,
    public type_conger: string,
    public date_reprise: string,
    public etablissement_conger: string,
    public validation: string,
    public statut: string,
    public description: string,
    public jours: number,
    public id_Employer: number,
  ) { }
}
