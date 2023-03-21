import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DELETE_DEMANDEFORMATION, LIST_DEMANDEFORMATION } from 'src/app/shared/_elements/api_constante';
import { DemandeFormrResponseModel } from 'src/app/shared/_models/responses/demandeForm-response.model';
import { DemandeFormService } from 'src/app/shared/_services/demandeFormService';
import { NotificationService } from 'src/app/shared/_services/notification.service';
import Swal from 'sweetalert2';
import { ModalDemandeFormComponent } from '../modal-demande-form/modal-demande-form.component';

@Component({
  selector: 'app-listing-demande-form',
  templateUrl: './listing-demande-form.component.html',
  styleUrls: ['./listing-demande-form.component.css']
})
export class ListingDemandeFormComponent implements OnInit {

  public demandes: DemandeFormrResponseModel[] = [];

  constructor(
    private demandeFormservice: DemandeFormService,
    private notif: NotificationService,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getDemande();
  }

  getDemande(){
    this.demandeFormservice.get(LIST_DEMANDEFORMATION).then((response:any)=>{
      this.demandes = response.data;
      console.log(this.demandes)
    }
    )
  }

  deleteContrat(item: any){
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
          'Demande supprimée ',
          'success'
        )
        this.demandeFormservice.delete(`${DELETE_DEMANDEFORMATION}/${item.id}`)
        .then((response:any)=>{
        console.log('response', response)
        this.getDemande();


      })
      }
      else {
        Swal.fire(
          'Annulé!',
          'demande non supprimé.',
          'error'
        )}
    })
  }

  openDialog(data: any) {
    const dialogRef = this.dialog.open(ModalDemandeFormComponent, {
     width: '700px',
     height: 'auto',
     data:data,
     disableClose: true,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
