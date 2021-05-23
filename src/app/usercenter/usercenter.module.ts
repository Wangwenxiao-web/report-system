import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsercenterRoutingModule } from './usercenter-routing.module';
import { UserinfoComponent } from './partial/userinfo/userinfo.component';
import { ScoreinfoComponent } from './partial/scoreinfo/scoreinfo.component';
import { TeacherinfoComponent } from './partial/teacherinfo/teacherinfo.component';
import { ClassinfoComponent } from './partial/classinfo/classinfo.component';


@NgModule({
  declarations: [
    UserinfoComponent,
    ScoreinfoComponent,
    TeacherinfoComponent,
    ClassinfoComponent
  ],
  imports: [
    CommonModule,
    UsercenterRoutingModule
  ]
})
export class UsercenterModule { }
