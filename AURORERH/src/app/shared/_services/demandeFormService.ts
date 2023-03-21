import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DemandeFormRequestModel } from "../_models/requests/demandeForm-request.model";

@Injectable({
  providedIn: 'root',
})
export class DemandeFormService{
  constructor(private http: HttpClient) {
  }

  public get(url:string) {
    return this.http.get(url).toPromise();
   }

   public post(url:string, dto:DemandeFormRequestModel){
    return this.http.post(url,dto).toPromise();
   }

   public put(url:string, dto:DemandeFormRequestModel){
    return this.http.put(url,dto).toPromise();
   }

   public delete(url:string){
    return this.http.delete(url).toPromise();
   }


}
