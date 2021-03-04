import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutsRoutingModule } from './workouts-routing.module';

// Containers
import { WorkoutsComponent } from './containers/workouts/workouts.component';

@NgModule({
  declarations: [WorkoutsComponent],
  imports: [CommonModule, WorkoutsRoutingModule],
  exports: [],
  providers: [],
})
export class WorkoutsModule {}
