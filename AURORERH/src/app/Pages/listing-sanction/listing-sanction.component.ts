import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DELETE_SANCTIONS, LIST_SANCTIONS, READBYID_SANCTIONS } from 'src/app/shared/_elements/api_constante';
import { SanctionResponseModel } from 'src/app/shared/_models/responses/sanction-response.model';
import { NotificationService } from 'src/app/shared/_services/notification.service';
import { SanctionService } from 'src/app/shared/_services/sanctionService';
import Swal from 'sweetalert2';
import {MatDialog} from '@angular/material/dialog';
import { ModalSanctionComponent } from '../modal-sanction/modal-sanction.component';
import { ModalAffichSanctionComponent } from '../modal-affich-sanction/modal-affich-sanction.component';


@Component({
  selector: 'app-listing-sanction',
  templateUrl: './listing-sanction.component.html',
  styleUrls: ['./listing-sanction.component.css']
})
export class ListingSanctionComponent implements OnInit {

  public token = '';
  public sanctions: SanctionResponseModel[] = [];
  constructor(
    private sanctionService: SanctionService,
    private notif: NotificationService,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getSanction(this.token);

  }

  updateSanction(event: any){
    console.log(event.target.value);
    this.getSanction(event.target.value);
  }
  getSanction(token: any){
    this.sanctionService.get(`${LIST_SANCTIONS}?token=${token}`).then((response:any)=>{
      this.sanctions = response.data.content;
      console.log(this.sanctions)
    }
    )
  }

  deleteSanction(item: any){
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
          'Sanction supprimé ',
          'success'
        )
        this.sanctionService.delete(`${DELETE_SANCTIONS}/${item.id}`)
        .then((response:any)=>{
        console.log('response', response)
        this.getSanction(this.token);
      })
      }
      else {
        Swal.fire(
          'Annulé!',
          'sanction non supprimé.',
          'error'
        )}
    })
  }
  openDialog(data: any) {
    const dialogRef = this.dialog.open(ModalSanctionComponent, {
     width: '700px',
     height: 'auto',
     data:data,
     disableClose: true

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogView(data: any) {
    const dialogRef = this.dialog.open(ModalAffichSanctionComponent, {
     width: '700px',
     height: 'auto',
     data:data,
     disableClose: true

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}
