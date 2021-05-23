import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { SwiperModule } from 'swiper/angular';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

import { HomeComponent } from "./home.component";
import { WelcomeComponent } from './welcome/welcome.component';




@NgModule({
  declarations: [
    HomeComponent,
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SwiperModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzCheckboxModule,
    NzMenuModule,
    NzIconModule,
    NzCarouselModule,
    NzAvatarModule,
    NzDropDownModule,
  ]
})
export class HomeModule { }
