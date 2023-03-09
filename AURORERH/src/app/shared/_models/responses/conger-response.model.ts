
import { EmployerReponseModel } from "./employer-response.model"

export class CongerResponseModel{
  constructor(
   public  id : number,

    public  date_debut: Date,

    public  date_fin: Date,

    public  type_conger: String,

    public  validation: String,

    public  description: String,

    public  date_reprise: Date,

    public  etablissement_conger: Date,

    public  employerResponseDTO: EmployerReponseModel,
  )
{}
}
