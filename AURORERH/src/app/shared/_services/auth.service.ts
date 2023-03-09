/* tslint:disable:triple-equals */
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, Observer} from 'rxjs';
import { TokenStorageService } from './token-storage.service';
import { UserRequestModel } from '../_models/requests/user-request.model';
import { AUTH } from '../_elements/api_constante';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient,
              private tokenStorage: TokenStorageService,
  ) { }

  public login(credentials: UserRequestModel): Observable<any> {
    return this.http.post(`${AUTH}`,
        new UserRequestModel( credentials.username, credentials.password), httpOptions);
  }

  getCurrentUser(): Observable<any> {
    return this.http.get(AUTH + 'user', httpOptions);
  }

}
