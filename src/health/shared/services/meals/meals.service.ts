import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

import { Store } from 'store';

import { AuthService } from '../../../../auth/shared/services/auth/auth.service';

export interface Meal {
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
          .snapshotChanges();
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
}
