import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DELETE_CONGERS, LIST_CONGERS } from 'src/app/shared/_elements/api_constante';
import { CongerResponseModel } from 'src/app/shared/_models/responses/conger-response.model';
import { CongerService } from 'src/app/shared/_services/conger.service';
import Swal from 'sweetalert2';
import {MatDialog} from '@angular/material/dialog';
import { ModalCongerComponent } from '../modal-conger/modal-conger.component';
import { ModalAffichCongerComponent } from '../modal-affich-conger/modal-affich-conger.component';

@Component({
  selector: 'app-listing-conger',
  templateUrl: './listing-conger.component.html',
  styleUrls: ['./listing-conger.component.css']
})
export class ListingCongerComponent implements OnInit {

public congers: CongerResponseModel[] = [];
public token = '';
  public page = 0;
  public size = 5;
  public totalElements!: any;

  constructor(
   private router: Router,
   private congerService: CongerService,
   public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getConger(this.token);
  }

  search(event: any){
    console.log(event.target.value);
    this.getConger(event.target.value);
  }

  onChangePageEmployer(event: any) {
    this.page = event - 1;
    this.getConger(this.token);
  }

  onChange(event: any) {
    console.log(event);
    this.size = event.target.value;
    this.getConger(this.token);
  }


  getConger(token: any){
    this.congerService.get(`${LIST_CONGERS}?token=${token}&page=${this.page}&size=${this.size}` ).then((response:any)=>{
      this.congers =response.data.content;
      this.totalElements = response.data.totalElements;
      console.log(response);
      console.log(this.congers)
    }
    )
  }

  deleteConger(item: any){
    Swal.fire({
      title: 'Êtes-vous sure?',
      text: "Vous ne pourrez pas revenir en arrière !",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'green',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimez !'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Supprimé!',
          'congé ou permission supprimé',
          'success'
        )
        this.congerService.delete(`${DELETE_CONGERS}/${item.id}`)
        .then((response:any)=>{
        console.log('response', response)
        this.getConger(this.token);


      })
      }
      else {
        Swal.fire(
          'Annulé!',
          'congé ou permission non supprimé',
          'error'
        )}
    })
  }

  openDialog(data: any) {
    const dialogRef = this.dialog.open(ModalCongerComponent, {
     width: '700px',
     height: 'auto',
     data:data,
     disableClose: true,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogView(data: any) {
    const dialogRef = this.dialog.open(ModalAffichCongerComponent , {
     width: '700px',
     height: 'auto',
     data:data,
     disableClose: true

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  goTi(){
    this.router.navigate(['/listing-contrat'])
  }

}
