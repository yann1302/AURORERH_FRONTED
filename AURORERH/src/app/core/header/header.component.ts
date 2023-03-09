import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/shared/_services/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentUser!:any;
  constructor(
    private tokenStorage: TokenStorageService
  ) { }

  ngOnInit(): void {
    this.getUser();
  }
  signOut(){
    this.tokenStorage.signOut();
  }

  getUser(){
    this.currentUser = this.tokenStorage.getUser()
    

  }

}
