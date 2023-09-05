import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagmentRoutingModule } from './user-managment-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { CoreModule } from '../@core/@core.module';
import { TabViewModule } from 'primeng/tabview';
import { SharedModule } from '../@shared/shared.module';
@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    UserManagmentRoutingModule,
    CoreModule,
    TabViewModule,
    SharedModule
  ]
})
export class UserManagmentModule { }
