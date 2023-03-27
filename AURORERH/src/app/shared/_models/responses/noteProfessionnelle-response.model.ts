
export class NoteProfessionnellesResponseModel {
  constructor(
    public id: number,
    public theme: string,
    public description: string,
    public photo: string,
    public date_publication: string
  ) { }
}
