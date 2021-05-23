import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportManagementRoutingModule } from './report-management-routing.module';
import { UploaddetailsComponent } from './partial/uploaddetails/uploaddetails.component';
import { MealcardComponent } from './partial/mealcard/mealcard.component';


@NgModule({
  declarations: [
    UploaddetailsComponent,
    MealcardComponent
  ],
  imports: [
    CommonModule,
    ReportManagementRoutingModule
  ]
})
export class ReportManagementModule { }
