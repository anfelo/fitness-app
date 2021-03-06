import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { filter, switchMap, tap, map } from 'rxjs/operators';

import { Store } from 'store';

import { AuthService } from '../../../../auth/shared/services/auth/auth.service';

export interface Workout {
  id?: string;
  name?: string;
  type?: string;
  strength?: any;
  endurance?: any;
  timestamp?: number;
}

@Injectable()
export class WorkoutsService {
  workouts$: Observable<Workout[]> = this.authService.authState.pipe(
    switchMap((user) => {
      if (user) {
        return this.db
          .collection<Workout>('workouts', (ref) =>
            ref.where('uid', '==', user.uid)
          )
          .valueChanges({ idField: 'id' });
      } else {
        return [];
      }
    }),
    tap((workouts) => this.store.set('workouts', workouts))
  );

  constructor(
    private store: Store,
    private authService: AuthService,
    private db: AngularFirestore
  ) {}

  async addWorkout(workout: Workout) {
    const user = await this.authService.user;
    return this.db.collection('workouts').add({
      ...workout,
      uid: user.uid,
    });
  }

  async updateWorkout(workout: Workout) {
    return this.db.collection('workouts').doc(workout.id).update(workout);
  }

  getWorkout(workoutId: string) {
    if (!workoutId) {
      return of({});
    }
    return this.store.select<Workout[]>('workouts').pipe(
      filter(Boolean),
      map((workouts: Workout[]) =>
        workouts.find((workout: Workout) => workout.id === workoutId)
      )
    );
  }

  removeWorkout(workoutId: string) {
    return this.db.collection('workouts').doc(workoutId).delete();
  }
}
