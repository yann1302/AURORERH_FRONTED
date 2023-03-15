import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DELETE_NOTEPROFESSIONNELLES, LIST_NOTEPROFESSIONNELLES } from 'src/app/shared/_elements/api_constante';
import { NoteProfessionnellesResponseModel } from 'src/app/shared/_models/responses/noteProfessionnelle-response.model';
import { NoteProfessionnelleService } from 'src/app/shared/_services/noteProfessionnelle.service';
import Swal from 'sweetalert2';
import { ModalNoteProfessionelleComponent } from '../modal-note-professionelle/modal-note-professionelle.component';

@Component({
  selector: 'app-listing-note-professionnelle',
  templateUrl: './listing-note-professionnelle.component.html',
  styleUrls: ['./listing-note-professionnelle.component.css']
})
export class ListingNoteProfessionnelleComponent implements OnInit {

  notesProfessionnelles: NoteProfessionnellesResponseModel[] = [];
  constructor(
    private noteProfessionnelleService: NoteProfessionnelleService,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getNoteProfessionnelle()

  }

  getNoteProfessionnelle(){
    this.noteProfessionnelleService.get(LIST_NOTEPROFESSIONNELLES).then((response:any)=>{
      this.notesProfessionnelles = response.data;
      console.log(this.notesProfessionnelles)
    }
    )
  }

  deleteNP(item: any){
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
        this.noteProfessionnelleService.delete(`${DELETE_NOTEPROFESSIONNELLES}/${item.id}`)
        .then((response:any)=>{
        console.log('response', response)
        this.getNoteProfessionnelle();
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
    const dialogRef = this.dialog.open(ModalNoteProfessionelleComponent, {
     width: '700px',
     height: 'auto',
     data:data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
