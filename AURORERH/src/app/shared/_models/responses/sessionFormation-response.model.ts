import { FormationResponseModel } from "./formation-response.model";

export class SessionFormationResponseModel{
  constructor(
    public  id:number,
    public  debut_form:Date,
    public  fin_form:Date,
    public  formateur:string,
    public  description:string,
    public  employers:any,
    public  formation: FormationResponseModel,
    public  reference:string,
    public  themeForm:string,

  ){

  }
}
