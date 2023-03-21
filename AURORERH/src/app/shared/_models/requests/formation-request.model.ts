
export class FormationRequestModel{
  constructor(
    public  id:number,
    public  theme_form:String,
    public  description:String,
    public  duree:String,
    public  date_publication:Date,
    public  photo:String
  ){}
}
