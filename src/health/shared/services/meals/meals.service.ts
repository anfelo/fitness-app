import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { filter, switchMap, tap, map } from 'rxjs/operators';

import { Store } from 'store';

import { AuthService } from '../../../../auth/shared/services/auth/auth.service';

export interface Meal {
  id?: string;
  name?: string;
  ingredients?: string[];
  timestamp?: number;
}

@Injectable()
export class MealsService {
  meals$: Observable<Meal[]> = this.authService.authState.pipe(
    switchMap((user) => {
      if (user) {
        return this.db
          .collection<Meal>('meals', (ref) => ref.where('uid', '==', user.uid))
          .valueChanges({ idField: 'id' });
      } else {
        return [];
      }
    }),
    tap((meals) => this.store.set('meals', meals))
  );

  constructor(
    private store: Store,
    private authService: AuthService,
    private db: AngularFirestore
  ) {}

  async addMeal(meal: Meal) {
    const user = await this.authService.user;
    return this.db.collection('meals').add({
      ...meal,
      uid: user.uid,
    });
  }

  async updateMeal(meal: Meal) {
    return this.db.collection('meals').doc(meal.id).update(meal);
  }

  getMeal(mealId: string) {
    if (!mealId) {
      return of({});
    }
    return this.store.select<Meal[]>('meals').pipe(
      filter(Boolean),
      map((meals: Meal[]) => meals.find((meal: Meal) => meal.id === mealId))
    );
  }

  removeMeal(mealId: string) {
    return this.db.collection('meals').doc(mealId).delete();
  }
}
