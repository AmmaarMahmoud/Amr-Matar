import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagmentRoutingModule } from './user-managment-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { CoreModule } from '../@core/@core.module';
import { TabViewModule } from 'primeng/tabview';
import { ChartModule } from 'primeng/chart';
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
    ChartModule
  ]
})
export class UserManagmentModule { }
