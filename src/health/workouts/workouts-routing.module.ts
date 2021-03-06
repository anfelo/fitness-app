import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Containers
import { WorkoutsComponent } from './containers/workouts/workouts.component';
import { WorkoutComponent } from './containers/workout/workout.component';

const routes: Routes = [
  {
    path: '',
    component: WorkoutsComponent,
  },
  {
    path: 'new',
    component: WorkoutComponent,
  },
  {
    path: ':id',
    component: WorkoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkoutsRoutingModule {}
