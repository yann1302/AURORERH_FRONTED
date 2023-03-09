import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DELETE_CONTRATS, LIST_CONTRATS } from 'src/app/shared/_elements/api_constante';
import { ContratResponseModel } from 'src/app/shared/_models/responses/contrat-response.model';
import { ContratService } from 'src/app/shared/_services/contratService';
import { NotificationService } from 'src/app/shared/_services/notification.service';
import Swal from 'sweetalert2';
import { AffichContratComponent } from '../affich-contrat/affich-contrat.component';



@Component({
  selector: 'app-listing-contrat',
  templateUrl: './listing-contrat.component.html',
  styleUrls: ['./listing-contrat.component.css']
})
export class ListingContratComponent implements OnInit {

  public contrats: ContratResponseModel[] = [];

  constructor(
    private contratService: ContratService,
    private notif: NotificationService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getContrat();

  }

  getContrat(){
    this.contratService.get(LIST_CONTRATS).then((response:any)=>{
      this.contrats = response.data;
      console.log(this.contrats)
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
          'Contrat supprimé, l`employé n`a plus de contrat ',
          'success'
        )
        this.contratService.delete(`${DELETE_CONTRATS}/${item.id}`)
        .then((response:any)=>{
        console.log('response', response)
        this.getContrat();


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

  goTo(){
    this.router.navigate(['/ajout-contrat'])
  }

  goTi(){
    this.router.navigate(['/listing-contrat'])
  }

goToViewId(contrat: ContratResponseModel){
  this.router.navigate(['/affich-contrat/', contrat.id])
}

recupId(contrat: ContratResponseModel){
  this.router.navigate(['/ajout-contrat/', contrat.id])
}

}
