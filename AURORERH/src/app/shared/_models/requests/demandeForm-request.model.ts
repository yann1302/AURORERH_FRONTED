export class DemandeFormRequestModel{
  constructor(
    public  id:number,
    public  date_demande:Date,
    public  statut:String,
    public  id_Employer:number,
    public  id_Formation:number
  ){}
}


