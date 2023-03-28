import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { NoteProfessionnellesRequestModel } from "../_models/requests/noteProfessionnel-request.model";

@Injectable({
  providedIn: 'root',
})

export class NoteProfessionnelleService {
  constructor(private http: HttpClient) {
  }

 public get(url:string) {
  return this.http.get(url).toPromise();
 }

 public post(url:string, dto:NoteProfessionnellesRequestModel){
  return this.http.post(url,dto).toPromise();
 }

 public put(url:string,dto:NoteProfessionnellesRequestModel){
  return  this.http.put(url,dto).toPromise();
 }

 public delete(url:string){
  return this.http.delete(url).toPromise();
 }



}

