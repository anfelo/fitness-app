import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/shared/guards/auth.guard';

const routes: Routes = [
  {
    path: 'meals',
    loadChildren: () =>
      import('./meals/meals.module').then((m) => m.MealsModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'schedule',
    loadChildren: () =>
      import('./schedule/schedule.module').then((m) => m.ScheduleModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'workouts',
    loadChildren: () =>
      import('./workouts/workouts.module').then((m) => m.WorkoutsModule),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HealthRoutingModule {}
