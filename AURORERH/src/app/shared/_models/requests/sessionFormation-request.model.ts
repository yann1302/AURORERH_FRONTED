export class SessionFormationRequestModel{
  constructor(
    public  id:number,
    public  debut_form:Date,
    public  fin_form:Date,
    public  formateur:string,
    public  description:string,
    public  employers: any,
    public  formation_id: number,
    public  themeForm:string,
    public  reference:string,
  ){

  }
}
