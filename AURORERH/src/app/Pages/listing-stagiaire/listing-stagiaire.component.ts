import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DELETE_STAGIAIRE, LIST_STAGIAIRE } from 'src/app/shared/_elements/api_constante';
import { StagiaireResponseModel } from 'src/app/shared/_models/responses/stagiaire-response.model';
import { NotificationService } from 'src/app/shared/_services/notification.service';
import { StagiaireService } from 'src/app/shared/_services/stagiaireService';
import Swal from 'sweetalert2';
import { ModalStagiaireComponent } from '../modal-stagiaire/modal-stagiaire.component';

@Component({
  selector: 'app-listing-stagiaire',
  templateUrl: './listing-stagiaire.component.html',
  styleUrls: ['./listing-stagiaire.component.css']
})
export class ListingStagiaireComponent implements OnInit {

  public isLoading!: boolean;
  public isLoginFailed = false;
  public stagiaires: StagiaireResponseModel[]=[];

  constructor(
   private stagiaireService: StagiaireService,
   private notif: NotificationService,
   private router: Router,
   private route: ActivatedRoute,
   public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getStagiaire()
  }

  getStagiaire(){
    this.stagiaireService.get(LIST_STAGIAIRE).then((response:any)=>{
      this.stagiaires = response.data;
      console.log(this.stagiaires)
    }
    )
  }

  deleteStagiaire(item: any){
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
          'Stagaire supprimé.',
          'success'
        )
        this.stagiaireService.delete(`${DELETE_STAGIAIRE}/${item.id}`)
        .then((response:any)=>{
        console.log('response', response)
        this.notif.success('Suppresion avec sucsess ')

        if (this.notif ){
          this.getStagiaire();
      }
        },err => {
          console.log(err)
          this.notif.danger('Echec lors de la suppresion, il ya des instances en cours ');
          this.isLoading = !this.isLoading;
          this.isLoginFailed = true;

      })
      }
      else {
        Swal.fire(
          'Annulé!',
          'Employer non supprimé.',
          'error'
        )}
    })
  }


  openDialog(data: any) {
    const dialogRef = this.dialog.open(ModalStagiaireComponent, {
     width: '1000px',
     height: 'auto',
     data:data,
     disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  goToViewId(stagiaire: StagiaireResponseModel){
    this.router.navigate(['/affich-stagiaire/', stagiaire.id])
  }
}
