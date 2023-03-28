import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { READBYID_STAGIAIRE } from 'src/app/shared/_elements/api_constante';
import { StagiaireService } from 'src/app/shared/_services/stagiaire.service';

@Component({
  selector: 'app-affich-stagiaire',
  templateUrl: './affich-stagiaire.component.html',
  styleUrls: ['./affich-stagiaire.component.css']
})
export class AffichStagiaireComponent implements OnInit {
  id: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private stagiaireService: StagiaireService,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.viewStagiaire(this.id);
  }
  viewStagiaire(id:number){
    this.stagiaireService.get(`${READBYID_STAGIAIRE}/${id}`)
    .then((response:any)=>{
      console.log('response', response)
      this.id = response.data
      console.log( 'test', this.id)
    });
  }

}
