export class CongerRequestModel{
  constructor(
    public  id : number,
    public  date_debut: Date,
    public  date_fin: Date,
    public  type_conger: String,
    public  date_reprise: Date,
    public  etablissement_conger: Date,
    public  validation: string,
    public statut: String,
    public  description: String,
    public  id_Employer: number,
  )
{}
  }
