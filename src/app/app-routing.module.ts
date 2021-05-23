import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, data:{title: "登录"} },
  { path: 'dashboard', 
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    canLoad: [AuthGuard]
   },
  { path: 'dormitorymanagement', 
    loadChildren: () => import ('./dormitory-management/dormitory-management.module').then(m => m.DormitoryManagementModule),
    canLoad: [AuthGuard]
   },
  { path: 'reportmanagement', 
    loadChildren:() => import ('./report-management/report-management.module').then(m => m.ReportManagementModule),
    canLoad: [AuthGuard]
   },
  { path: 'usercenter', 
    loadChildren:() => import ('./usercenter/usercenter.module').then(m => m.UsercenterModule),
    canLoad: [AuthGuard]
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
