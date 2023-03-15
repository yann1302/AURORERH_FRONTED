import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { READBYID_EMPLOYER } from 'src/app/shared/_elements/api_constante';
import { EmployerReponseModel } from 'src/app/shared/_models/responses/employer-response.model';
import { EmployerService } from 'src/app/shared/_services/employerService';

@Component({
  selector: 'app-affich-employer',
  templateUrl: './affich-employer.component.html',
  styleUrls: ['./affich-employer.component.css']
})
export class AffichEmployerComponent implements OnInit {
  public id!: any;
  public photo!: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private employerService: EmployerService,
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.viewEmployer(this.id);
  }

  viewEmployer(id:number){
    this.employerService.get(`${READBYID_EMPLOYER}/${id}`)
    .then((response:any)=>{
      console.log('response', response);
      console.log('photo', response.data.photo);
      this.photo = response.data.photo;
      this.id = response.data;
      console.log( 'test', this.id);
    });
  }

  goTi(){
    this.router.navigate(['/listing-employer'])
  }
}
