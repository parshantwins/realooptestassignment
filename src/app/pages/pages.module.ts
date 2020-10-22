import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';

import { PagesRoutingModule } from './pages-routing.module';
import { ListingsComponent } from './listings/listings.component';
import { AppointmentComponent } from './listings/appointment/appointment.component';
import { AppointmentCalendarComponent } from './listings/appointment/appointment-calendar/appointment-calendar.component';

@NgModule({
  declarations: [ListingsComponent, AppointmentComponent, AppointmentCalendarComponent],
  imports: [
    CommonModule,
    FormsModule,
    PagesRoutingModule,
    RouterModule,
    NzBreadCrumbModule,
    NzTabsModule,
    NzCardModule,
    NzGridModule,
    NzCheckboxModule,
    NzSelectModule,
    NzInputModule,
    NzTableModule,
    NzSwitchModule,
    NzButtonModule,
    NzFormModule
  ]
})
export class PagesModule { }
