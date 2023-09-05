import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidbarComponent } from './components/sidbar/sidbar.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    SidbarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    SidbarComponent,
    HeaderComponent
  ]
})
export class CoreModule { }
