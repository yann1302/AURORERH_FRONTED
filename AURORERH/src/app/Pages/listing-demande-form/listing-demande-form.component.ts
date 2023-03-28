import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DELETE_DEMANDEFORMATION, LIST_DEMANDEFORMATION } from 'src/app/shared/_elements/api_constante';
import { DemandeFormrResponseModel } from 'src/app/shared/_models/responses/demandeForm-response.model';
import { DemandeFormService } from 'src/app/shared/_services/demande-Form.service';
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
  public token = '';
  public page = 0;
  public size = 5;
  public totalElements!: any;

  constructor(
    private demandeFormservice: DemandeFormService,
    private notif: NotificationService,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getDemande(this.token);
  }

  search(event: any){
    console.log(event.target.value);
    this.getDemande(event.target.value);
  }

  onChangePageEmployer(event: any) {
    this.page = event - 1;
    this.getDemande(this.token);
  }

  onChange(event: any) {
    console.log(event);
    this.size = event.target.value;
    this.getDemande(this.token);
  }

  getDemande(token: any){
    this.demandeFormservice.get(`${LIST_DEMANDEFORMATION}?token=${token}&page=${this.page}&size=${this.size}`).then((response:any)=>{
      this.demandes =  response.data.content;
      this.totalElements = response.data.totalElements;
      console.log(response);
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
        this.getDemande(this.token);
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
