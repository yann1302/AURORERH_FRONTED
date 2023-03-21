import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormationRequestModel } from "../_models/requests/formation-request.model";

@Injectable({
  providedIn: 'root',
})
export class FormationService{
  constructor(private http: HttpClient) {
  }

  public get(url:string) {
    return this.http.get(url).toPromise();
   }

   public post(url:string, dto:FormationRequestModel){
    return this.http.post(url,dto).toPromise();
   }

   public put(url:string, dto:FormationRequestModel){
    return this.http.put(url,dto).toPromise();
   }

   public delete(url:string){
    return this.http.delete(url).toPromise();
   }


}
