import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guard/auth.guard';

import { HomeComponent } from "./home.component";
import { WelcomeComponent } from './welcome/welcome.component'

const routes: Routes = [
  { path: '', component: HomeComponent,canActivate: [AuthGuard],
    children:[
    { path: '', redirectTo: 'welcome', pathMatch: 'full', },
    { path:'welcome',component:WelcomeComponent },
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
