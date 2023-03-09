import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DELETE_CONGERS, LIST_CONGERS } from 'src/app/shared/_elements/api_constante';
import { CongerResponseModel } from 'src/app/shared/_models/responses/conger-response.model';
import { CongerService } from 'src/app/shared/_services/conger.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listing-conger',
  templateUrl: './listing-conger.component.html',
  styleUrls: ['./listing-conger.component.css']
})
export class ListingCongerComponent implements OnInit {

public congers: CongerResponseModel[] = [];

  constructor(
   private router: Router,
   private congerService: CongerService
  ) { }

  ngOnInit(): void {
    this.getConger();
  }

  getConger(){
    this.congerService.get(LIST_CONGERS).then((response:any)=>{
      this.congers = response.data;
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
          'Conger supprimé',
          'success'
        )
        this.congerService.delete(`${DELETE_CONGERS}/${item.id}`)
        .then((response:any)=>{
        console.log('response', response)
        this.getConger();


      })
      }
      else {
        Swal.fire(
          'Annulé!',
          'Contrat non supprimé.',
          'error'
        )}
    })
  }

  goTi(){
    this.router.navigate(['/listing-contrat'])
  }

}
