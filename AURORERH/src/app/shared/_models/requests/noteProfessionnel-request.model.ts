
export class NoteProfessionnellesRequestModel {
  constructor(
    public id: number,
    public theme: string,
    public description: string,
    public date_publication: string,
    public photo: string,

  ) { }
}
