import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { StagiaireRequestModel } from "../_models/requests/stagiaire-request-model";


@Injectable({
  providedIn: 'root',
})

export class StagiaireService {
  constructor(private http: HttpClient) {
  }

 public get(url:string) {
  return this.http.get(url).toPromise();
 }

 public post(url:string, dto:StagiaireRequestModel){
  return this.http.post(url,dto).toPromise();
 }

 public put(url:string,dto:StagiaireRequestModel){
  return  this.http.put(url,dto).toPromise();
 }

 public delete(url:string){
  return this.http.delete(url).toPromise();
 }
}
