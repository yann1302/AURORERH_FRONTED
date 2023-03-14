import { Component, OnInit } from '@angular/core';
import { LIST_NOTEPROFESSIONNELLES } from 'src/app/shared/_elements/api_constante';
import { NoteProfessionnellesResponseModel } from 'src/app/shared/_models/responses/noteProfessionnelle-response.model';
import { NoteProfessionnelleService } from 'src/app/shared/_services/noteProfessionnelle.service';

@Component({
  selector: 'app-listing-note-professionnelle',
  templateUrl: './listing-note-professionnelle.component.html',
  styleUrls: ['./listing-note-professionnelle.component.css']
})
export class ListingNoteProfessionnelleComponent implements OnInit {

  notesProfessionnelles: NoteProfessionnellesResponseModel[] = [];
  constructor(
    private noteProfessionnelleService: NoteProfessionnelleService,
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

}
