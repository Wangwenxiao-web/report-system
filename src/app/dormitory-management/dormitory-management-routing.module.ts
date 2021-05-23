import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guard/auth.guard';
import { HomeComponent } from '../home/home.component';
import { ChangeComponent } from './partial/change/change.component';
import { CheckComponent } from './partial/check/check.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,canActivate: [AuthGuard], 
    children: [
      { path: 'check', component: CheckComponent },
      { path: 'change', component: ChangeComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DormitoryManagementRoutingModule { }
