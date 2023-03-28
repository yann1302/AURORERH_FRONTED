import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DELETE_SESSIONFORMATIONS, LIST_SESSIONFORMATIONS } from 'src/app/shared/_elements/api_constante';
import { SessionFormationResponseModel } from 'src/app/shared/_models/responses/sessionFormation-response.model';
import { SessionListResponseModel } from 'src/app/shared/_models/responses/sessionList-response.model';
import { NotificationService } from 'src/app/shared/_services/notification.service';
import { SessionFormationService } from 'src/app/shared/_services/session-Formation.service';
import Swal from 'sweetalert2';
import { ModalSessionFormComponent } from '../modal-session-form/modal-session-form.component';


@Component({
  selector: 'app-listing-session-formation',
  templateUrl: './listing-session-formation.component.html',
  styleUrls: ['./listing-session-formation.component.css']
})
export class ListingSessionFormationComponent implements OnInit {

  public sessionForms: SessionListResponseModel[] = [];

  constructor(
    private sessionFormationService: SessionFormationService,
    private notif: NotificationService,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog

  ) { }

  ngOnInit(): void {
    this.getSessionForm();
  }

  getSessionForm(){
    this.sessionFormationService.get(LIST_SESSIONFORMATIONS).then((response:any)=>{
      this.sessionForms = response.data
        console.log(this.sessionForms)
    }
    )
  }

   deleteSession(item: any){
    Swal.fire({
      title: 'Êtes-vous sure?',
      text: "Vous ne pourrez pas revenir en arrière ! La session sera supprimée",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'green',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimez !'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Supprimé!',
          'Session de formation supprimée ',
          'success'
        )
        this.sessionFormationService.delete(`${DELETE_SESSIONFORMATIONS}/${item.reference}`)
        .then((response:any)=>{
        console.log('response', response)
        this.getSessionForm();
      })
      }
      else {
        Swal.fire(
          'Annulé!',
          'Session de formation  non supprimé.',
          'error'
        )}
    })
  }

  openDialog(data: any) {
    const dialogRef = this.dialog.open(ModalSessionFormComponent, {
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
