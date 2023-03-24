import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DELETE_FORMATIONS, LIST_FORMATIONS } from 'src/app/shared/_elements/api_constante';
import { FormationResponseModel } from 'src/app/shared/_models/responses/formation-response.model';
import { FormationService } from 'src/app/shared/_services/formation.service';
import Swal from 'sweetalert2';
import { ModalFormationComponent } from '../modal-formation/modal-formation.component';

@Component({
  selector: 'app-listing-formation',
  templateUrl: './listing-formation.component.html',
  styleUrls: ['./listing-formation.component.css']
})
export class ListingFormationComponent implements OnInit {

  formations: FormationResponseModel[] = [];
  public token = '';
  public page = 0;
  public size = 6;
  public totalElements!: any;

  constructor(
    private router: Router,
    private formationService: FormationService,
    public dialog: MatDialog

  ) { }

  ngOnInit(): void {
    this.getFormation(this.token)
  }

  search(event: any){
    console.log(event.target.value);
    this.getFormation(event.target.value);
  }

  onChangePageEmployer(event: any) {
    this.page = event - 1;
    this.getFormation(this.token);
  }

  onChange(event: any) {
    console.log(event);
    this.size = event.target.value;
    this.getFormation(this.token);
  }

  getFormation(token: any){
    this.formationService.get(`${LIST_FORMATIONS}?token=${token}&page=${this.page}&size=${this.size}`).then((response:any)=>{
      this.formations = response.data.content;
      this.totalElements = response.data.totalElements;
      console.log(response);
      console.log(this.formations)
    }
    )
  }

  openDialog(data: any) {
    const dialogRef = this.dialog.open(ModalFormationComponent, {
     width: '700px',
     height: 'auto',
     data:data,
     disableClose: true

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  deleteFormation(item: any){
    Swal.fire({
      title: 'Êtes-vous sure?',
      text: "Vous ne pourrez pas revenir en arrière ! la formation, la liste des demandes de la formation et les sessions de cette formatioon seront suprimées",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'green',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimez !'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Supprimé!',
          'formation, la liste des demandes de la formation et les sessions de cette formatioon ont été suprimées ',
          'success'
        )
        this.formationService.delete(`${DELETE_FORMATIONS}/${item.id}`)
        .then((response:any)=>{
        console.log('response', response)
        this.getFormation(this.token);
      })
      }
      else {
        Swal.fire(
          'Annulé!',
          'Formation non supprimée.',
          'error'
        )}
    })
  }
}
