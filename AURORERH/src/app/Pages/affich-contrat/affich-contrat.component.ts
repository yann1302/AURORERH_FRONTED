import { Component, Inject, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { READBYID_CONTRATS } from 'src/app/shared/_elements/api_constante';
import { ContratService } from 'src/app/shared/_services/contratService';

@Component({
  selector: 'app-affich-contrat',
  templateUrl: './affich-contrat.component.html',
  styleUrls: ['./affich-contrat.component.css']
})
export class AffichContratComponent implements OnInit {
  id: any;

  constructor(
    private route: ActivatedRoute,
    private contartService: ContratService,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.viewContrat(this.id);
  }

  viewContrat(id: number) {
    this.contartService.get(`${READBYID_CONTRATS}/${id}`)
      .then((response: any) => {
        console.log('response', response);
        this.id = response.data;
        console.log('test', this.id);
      });
  }


  downloadMyFile() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'abc.net/files/test.ino');
    link.setAttribute('download', `contrat.zip`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}
