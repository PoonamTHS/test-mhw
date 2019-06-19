import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardRoutingModule} from './dashboard.routing.module' ;
import { IonicModule } from '@ionic/angular';
import { DashboardPage } from './dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    DashboardRoutingModule
  ],
  declarations: [DashboardPage]
})
export class DashboardPageModule {}

