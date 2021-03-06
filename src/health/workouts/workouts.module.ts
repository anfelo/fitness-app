import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { WorkoutsRoutingModule } from './workouts-routing.module';
import { SharedModule } from '../shared/shared.module';

// Containers
import { WorkoutsComponent } from './containers/workouts/workouts.component';
import { WorkoutComponent } from './containers/workout/workout.component';

// Components
import { WorkoutFormComponent } from './components/workout-form/workout-form.component';
import { WorkoutTypeComponent } from './components/workout-type/workout-type.component';

@NgModule({
  declarations: [
    WorkoutsComponent,
    WorkoutComponent,
    WorkoutFormComponent,
    WorkoutTypeComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    WorkoutsRoutingModule,
    SharedModule,
  ],
})
export class WorkoutsModule {}
