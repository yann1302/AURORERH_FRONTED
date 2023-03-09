import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt';
import { AuthService } from '../_services/auth.service';
import { NotificationService } from '../_services/notification.service';
import { TokenStorageService } from '../_services/token-storage.service';



@Injectable({
  providedIn: 'root'
})
export class UserGuardService implements CanActivate {

  constructor(
    private router: Router,
    private tokenStorage: TokenStorageService,
    private authService: AuthService,
    private notifService: NotificationService
    )
    {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    if (this.tokenStorage.getToken()) {
      const helper = new JwtHelperService();
      if (this.tokenStorage.getUser()) {
        return !helper.isTokenExpired(this.tokenStorage.getToken());
      }
    } else {
      // this.notifService.warning('acces refuse');
      this.router.navigate (['/session/login']);
    }


    return true;
  }
}
