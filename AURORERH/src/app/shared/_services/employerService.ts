import { Injectable } from "@angular/core";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EmployerRequestModel } from "../_models/requests/employer-request.model";


@Injectable({
  providedIn: 'root',
})

export class EmployerService {
  constructor(private http: HttpClient) {
  }

 public get(url:string) {
  return this.http.get(url).toPromise();
 }

 public post(url:string, dto:EmployerRequestModel){
  return this.http.post(url,dto).toPromise();
 }

 public put(url:string,dto:EmployerRequestModel){
  return  this.http.put(url,dto).toPromise();
 }

 public delete(url:string){
  return this.http.delete(url).toPromise();
 }



}



