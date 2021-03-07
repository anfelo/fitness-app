import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { RouterModule } from '@angular/router';

// Services
import { MealsService } from './services/meals/meals.service';
import { WorkoutsService } from './services/workouts/workouts.service';

// Components
import { ListItemComponent } from './components/list-item/list-item.component';

// Pipes
import { JoinPipe } from './pipes/join.pipe';
import { WorkoutPipe } from './pipes/workout.pipe';

@NgModule({
  declarations: [ListItemComponent, JoinPipe, WorkoutPipe],
  imports: [CommonModule, RouterModule, AngularFirestoreModule],
  exports: [ListItemComponent, JoinPipe, WorkoutPipe],
  providers: [],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [MealsService, WorkoutsService],
    };
  }
}
