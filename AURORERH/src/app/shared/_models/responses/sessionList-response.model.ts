export class SessionListResponseModel{
  constructor(
    public  reference:string,
    public  description:string,
    public  debut_form:Date,
    public  fin_form:Date,
    public  themeForm:string,
    public  formateur:string,
    public  totalEmploye:number
  ){}
  }
