import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DELETE_EMPLOYER, LIST_EMPLOYERS, READBYID_EMPLOYER, UPDATE_EMPLOYER } from 'src/app/shared/_elements/api_constante';
import { EmployerReponseModel } from 'src/app/shared/_models/responses/employer-response.model';
import { EmployerService } from 'src/app/shared/_services/employer.service';
import { NotificationService } from 'src/app/shared/_services/notification.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-listing-employer',
  templateUrl: './listing-employer.component.html',
  styleUrls: ['./listing-employer.component.css']
})
export class ListingEmployerComponent implements OnInit {

  public isLoading!: boolean;
  public isLoginFailed = false;
  public employers: EmployerReponseModel[] = [];
  public employesActifs!: any[];
  public employes!: any[];
  public id!: any
  public collection: any[] = [];
  public token = '';
  public page = 0;
  public size = 5;
  public totalElements!: any;

  constructor(
    private employerService: EmployerService,
    private notif: NotificationService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getEmployer(this.token);

  }

  search(event: any) {
    console.log(event.target.value);
    this.getEmployer(event.target.value);
  }

  onChangePageEmployer(event: any) {
    this.page = event - 1;
    this.getEmployer(this.token);

  }

  onChangeSize(event: any) {
    console.log(event);
    this.size = event.target.value;
    this.getEmployer(this.token);
    this.page = 0;
  }

  getEmployer(token: any) {
    this.employerService.get(`${LIST_EMPLOYERS}?token=${token}&page=${this.page}&size=${this.size}`).then((response: any) => {
      this.employers = response.data.content;
      this.totalElements = response.data.totalElements;
      this.filterEmployes();
      console.log(response);
      console.log(this.employers);
    }
    )
  }

  // Méthode pour filtrer les employés actifs
  filterEmployes() {
    this.employesActifs = this.employers.filter(employes => employes.statut !== 'INACTIF');
    console.log('employesActifs', this.employesActifs);
  }

  deleteEmployer(item: any) {
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
          'Employé supprimé.',
          'success'
        )
        this.employerService.delete(`${DELETE_EMPLOYER}/${item.id}`)
          .then((response: any) => {
            console.log('response', response)
            this.notif.success('Ajout avec sucsess ')

            if (this.notif) {
              this.getEmployer(this.token);
            }
          }, err => {
            console.log(err)
            this.notif.danger('Echec lors de la suppresion, il ya des instances en cours ');
            this.isLoading = !this.isLoading;
            this.isLoginFailed = true;
            Swal.fire(
              'Annulé!',
              'Employé non supprimé.',
              'error'
            )
          })
      }
      else {
        Swal.fire(
          'Annulé!',
          'Employé non supprimé.',
          'error'
        )
      }
    })
  }

  goTo() {
    this.router.navigate(['/ajout-employer'])
  }

  goTi() {
    this.router.navigate(['/listing-employer'])
  }

  goToViewId(employer: EmployerReponseModel) {
    this.router.navigate(['/affich-employer/', employer.id])
  }

  recupId(employer: EmployerReponseModel) {
    this.router.navigate(['/ajout-employer/', employer.id])
  }

}


