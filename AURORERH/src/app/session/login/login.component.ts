/* tslint:disable:triple-equals */
'use strict';

import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "src/app/shared/_services/auth.service";
import { NotificationService } from "src/app/shared/_services/notification.service";
import { TokenStorageService } from "src/app/shared/_services/token-storage.service";
import { UserRequestModel } from "src/app/shared/_models/requests/user-request.model";

@Component({
    selector: 'ms-login-session',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
    public isLoggedIn = false;
    public isLoginFailed = false;
    private currentUser!: any;
    public formLogin!: FormGroup;
    public submitted!: boolean;
    public isLoading!: boolean;


    constructor(
      private router: Router,
      private authService: AuthService,
      private tokenStorage: TokenStorageService,
      private fb: FormBuilder,
      private route: ActivatedRoute,
      private notif: NotificationService
      ) { }


    ngOnInit(): void {
        this.currentUser = this.tokenStorage.getUser()
        const currentToken = this.tokenStorage.getToken()
        if (this.currentUser || currentToken) {
            this.isLoggedIn = true;
           this.router.navigate(['/']).then(() => {});
        } else {
            this.initFormLogin();
        }
    }
    private initFormLogin() {
        this.formLogin = this.fb.group({
            login: ['', Validators.required],
            password: ['', Validators.required],
        });
    }

    get f() { return this.formLogin.controls; }

    login() {
        this.submitted = true;
        this.isLoading = true;
        if (this.formLogin.invalid) {
            this.isLoading = !this.isLoading;
            return;
        }
        let dto;
        dto = new UserRequestModel(this.f.login.value, this.f.password.value)
        this.authService.login(dto)
            .subscribe((result: any) => {
            console.log('result', result)
            this.tokenStorage.saveToken(result.data.token);
            this.tokenStorage.saveUser(result.data.userResponseDto);
            this.isLoading = !this.isLoading;
            this.notif.success('Connexion avec sucsess ')
            window.location.reload();
            if (this.tokenStorage.getUser() || this.tokenStorage.getToken()){
                this.router.navigate(['']).then(() => {});
            }
        }, err => {
            console.log(err)
            this.notif.danger('Echec lors de la connexion ');
            this.isLoading = !this.isLoading;
            this.isLoginFailed = true;
        })
    }

   
}



