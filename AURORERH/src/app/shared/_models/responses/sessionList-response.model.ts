export class SessionListResponseModel {
  constructor(
    public reference: string,
    public description: string,
    public debut_form: string,
    public fin_form: string,
    public themeForm: string,
    public formateur: string,
    public totalEmploye: number
  ) { }
}
