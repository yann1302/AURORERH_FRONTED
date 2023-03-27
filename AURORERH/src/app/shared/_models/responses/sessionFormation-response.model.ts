import { FormationResponseModel } from "./formation-response.model";
import { EmployerReponseModel } from "./employer-response.model";

export class SessionFormationResponseModel {
  constructor(
    public id: number,
    public debut_form: string,
    public fin_form: string,
    public formateur: string,
    public description: string,
    public employerResponseDTO: any,
    public formationResponseDTO: FormationResponseModel,
    public reference: string,
    public themeForm: string,

  ) {

  }
}
