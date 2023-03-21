
export class FormationResponseModel{
  constructor(
    public  id:number,
    public  theme_form:string,
    public  description:string,
    public  duree:string,
    public  date_publication:Date,
    public  photo:String
  ){}
}
