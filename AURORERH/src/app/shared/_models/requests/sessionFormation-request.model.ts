export class SessionFormationRequestModel {
  constructor(
    public id: number,
    public debut_form: string,
    public fin_form: string,
    public formateur: string,
    public description: string,
    public employers: any,
    public formation_id: number,
    public themeForm: string,
    public reference: string,
  ) {

  }
}
