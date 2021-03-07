import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import {
  Workout,
  WorkoutsService,
} from '../../../shared/services/workouts/workouts.service';

@Component({
  selector: 'workout',
  styleUrls: ['./workout.component.scss'],
  template: `
    <div class="workout">
      <div class="workout__title">
        <h1>
          <img src="/assets/img/workout.svg" />
          <span *ngIf="workout$ | async as workout; else title">
            {{ workout.name ? 'Edit' : 'Create' }} workout
          </span>
          <ng-template #title>Loading...</ng-template>
        </h1>
      </div>
      <div *ngIf="workout$ | async as workout; else loading">
        <workout-form
          [workout]="workout"
          (create)="addWorkout($event)"
          (update)="updateWorkout($event)"
          (remove)="removeWorkout($event)"
        >
        </workout-form>
      </div>
      <ng-template #loading>
        <div class="message">
          <img src="/assets/img/loading.svg" />
          Fetching workout...
        </div>
      </ng-template>
    </div>
  `,
})
export class WorkoutComponent implements OnInit, OnDestroy {
  workout$: Observable<Workout>;
  subscription: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private workoutsService: WorkoutsService
  ) {}

  ngOnInit() {
    this.subscription = this.workoutsService.workouts$.subscribe();
    this.workout$ = this.route.params.pipe(
      switchMap((param) => this.workoutsService.getWorkout(param.id))
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  async addWorkout(workout: Workout) {
    await this.workoutsService.addWorkout(workout);
    this.backToWorkouts();
  }

  async updateWorkout(workout: Workout) {
    const id = this.route.snapshot.params.id;
    await this.workoutsService.updateWorkout({ id, ...workout });
    this.backToWorkouts();
  }

  async removeWorkout(workout: Workout) {
    const id = this.route.snapshot.params.id;
    await this.workoutsService.removeWorkout(id);
    this.backToWorkouts();
  }

  backToWorkouts() {
    this.router.navigate(['workouts']);
  }
}
