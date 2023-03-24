import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingEmployerComponent } from '../Pages/listing-employer/listing-employer.component';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    ListingEmployerComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule

  ]
})
export class SharedModule { }
