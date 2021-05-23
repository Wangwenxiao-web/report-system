import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guard/auth.guard';
import { HomeComponent } from '../home/home.component';
import { ClassinfoComponent } from './partial/classinfo/classinfo.component';
import { ScoreinfoComponent } from './partial/scoreinfo/scoreinfo.component';
import { TeacherinfoComponent } from './partial/teacherinfo/teacherinfo.component';
import { UserinfoComponent } from './partial/userinfo/userinfo.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent, canActivate: [AuthGuard],
    children: [
      { path: 'user', component:UserinfoComponent },
      { path: 'score', component: ScoreinfoComponent },
      { path: 'teacher', component: TeacherinfoComponent },
      { path: 'class', component: ClassinfoComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsercenterRoutingModule { }
