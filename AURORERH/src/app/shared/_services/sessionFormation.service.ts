import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SessionFormationResponseModel } from "../_models/responses/sessionFormation-response.model";

@Injectable({
  providedIn: 'root',
})
export class SessionFormationService{
  constructor(private http: HttpClient) {
  }
  public get(url:string) {
    return this.http.get(url).toPromise();
   }

   public post(url:string, dto:SessionFormationResponseModel){
    return this.http.post(url,dto).toPromise();
   }

   public put(url:string, dto:SessionFormationResponseModel){
    return this.http.put(url,dto).toPromise();
   }

   public delete(url:string){
    return this.http.delete(url).toPromise();
   }

  }
