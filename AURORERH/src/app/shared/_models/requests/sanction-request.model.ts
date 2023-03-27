export class SanctionRequestModel {
  constructor(
    public id: number,
    public type_sanction: string,
    public debut_sanction: string,
    public fin_sanction: string,
    public description: string,
    public statut: string,
    public id_Employer: number,

  ) { }

}
