import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SanctionRequestModel } from "../_models/requests/sanction-request.model";

@Injectable({
  providedIn: 'root',
})
export class SanctionService{
  constructor(private http: HttpClient) {
  }
  public get(url:string) {
    return this.http.get(url).toPromise();
   }

   public post(url:string, dto:SanctionRequestModel){
    return this.http.post(url,dto).toPromise();
   }

   public put(url:string, dto:SanctionRequestModel){
    return this.http.put(url,dto).toPromise();
   }

   public delete(url:string){
    return this.http.delete(url).toPromise();
   }


}
