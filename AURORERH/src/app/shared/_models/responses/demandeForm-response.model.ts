import { EmployerReponseModel } from "./employer-response.model";
import { FormationResponseModel } from "./formation-response.model";

export class DemandeFormrResponseModel {
  constructor(
    public id: number,
    public date_demande: string,
    public statut: string,
    public employerResponseDTO: EmployerReponseModel,
    public formationResponseDTO: FormationResponseModel,
  ) { }
}
