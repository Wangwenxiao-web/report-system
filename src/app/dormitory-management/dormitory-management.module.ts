import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { NzTableModule } from 'ng-zorro-antd/table';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzMessageModule } from 'ng-zorro-antd/message';

import { DormitoryManagementRoutingModule } from './dormitory-management-routing.module';
import { CheckComponent } from './partial/check/check.component';
import { ChangeComponent } from './partial/change/change.component';
// import { DemoComponent } from './partial/demo/demo/demo.component';


@NgModule({
  declarations: [
    CheckComponent,
    ChangeComponent,
    // DemoComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    DormitoryManagementRoutingModule,
    NzTableModule,
    NzFormModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzCheckboxModule,
    NzMenuModule,
    NzMessageModule,
  ]
})
export class DormitoryManagementModule { }
