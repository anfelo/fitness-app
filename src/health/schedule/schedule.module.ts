import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleRoutingModule } from './schedule-routing.module';

// Containers
import { ScheduleComponent } from './containers/schedule/schedule.component';

@NgModule({
  declarations: [ScheduleComponent],
  imports: [CommonModule, ScheduleRoutingModule],
  exports: [],
  providers: [],
})
export class ScheduleModule {}
