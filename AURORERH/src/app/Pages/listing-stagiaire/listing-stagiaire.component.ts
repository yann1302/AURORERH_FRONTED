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
  public token = '';
  public page = 0;
public size = 5;
  public totalElements!: any;

  constructor(
   private stagiaireService: StagiaireService,
   private notif: NotificationService,
   private router: Router,
   private route: ActivatedRoute,
   public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getStagiaire(this.token)
  }

  search(event: any){
    console.log(event.target.value);
    this.getStagiaire(event.target.value);
  }

  onChangePageEmployer(event: any) {
    this.page = event - 1;
    this.getStagiaire(this.token);
  }

  onChange(event: any) {
    console.log(event);
    this.size = event.target.value;
    this.page = 0;
    this.getStagiaire(this.token);
  }

  getStagiaire(token: any){
    this.stagiaireService.get(`${LIST_STAGIAIRE}?token=${token}&page=${this.page}&size=${this.size}`).then((response:any)=>{
      this.stagiaires = response.data.content;
      this.totalElements = response.data.totalElements;
      console.log(response);
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
          'Stagiaire supprimé.',
          'success'
        )
        this.stagiaireService.delete(`${DELETE_STAGIAIRE}/${item.id}`)
        .then((response:any)=>{
        console.log('response', response)
        this.notif.success('Suppresion avec sucsess ')

        if (this.notif ){
          this.getStagiaire(this.token);
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
          'Stagiaire non supprimé.',
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
