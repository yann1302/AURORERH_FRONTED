
export class FormationRequestModel {
  constructor(
    public id: number,
    public theme_form: string,
    public description: string,
    public duree: number,
    public date_publication: string,
    public photo: string
  ) { }
}
