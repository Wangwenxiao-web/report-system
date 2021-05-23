import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guard/auth.guard';
import { HomeComponent } from '../home/home.component';
import { MealcardComponent } from './partial/mealcard/mealcard.component';
import { UploaddetailsComponent } from './partial/uploaddetails/uploaddetails.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent, canActivate: [AuthGuard],
    children: [
      { path: 'uploadDetails', component:UploaddetailsComponent },
      { path: 'mealcard', component:MealcardComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportManagementRoutingModule { }
