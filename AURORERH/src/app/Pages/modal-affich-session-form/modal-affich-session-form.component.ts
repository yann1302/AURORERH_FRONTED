import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { READBYID_SESSIONFORMATIONS } from 'src/app/shared/_elements/api_constante';
import { SessionFormationService } from 'src/app/shared/_services/sessionFormation.service';


@Component({
  selector: 'app-modal-affich-session-form',
  templateUrl: './modal-affich-session-form.component.html',
  styleUrls: ['./modal-affich-session-form.component.css']
})
export class ModalAffichSessionFormComponent implements OnInit {
  reference: any;
  constructor(
    private route: ActivatedRoute,
    private sessionFormationService: SessionFormationService,
  ) { }

  ngOnInit(): void {
    this.reference = this.route.snapshot.params['reference'];
    console.log(this.reference);
    this.viewSessionForm(this.reference);
  }

  viewSessionForm(reference: string) {
    this.sessionFormationService.get(`${READBYID_SESSIONFORMATIONS}/${reference}`)
      .then((response: any) => {
        console.log('response', response);
        this.reference = response.data;
        console.log('test', this.reference);
      });
  }


}
