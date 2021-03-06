import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from 'store';
import {
  Meal,
  MealsService,
} from '../../../../health/shared/services/meals/meals.service';

@Component({
  selector: 'meals',
  template: `
    <div class="meals">
      <div class="meals__title">
        <h1>
          <img src="/assets/img/food.svg" />
          Your meals
        </h1>
        <a class="btn__add" [routerLink]="['../meals/new']">
          <img src="/assets/img/add-white.svg" />
          New meal
        </a>
      </div>
      <div *ngIf="meals$ | async as meals; else loading">
        <div class="message" *ngIf="!meals.length">
          <img src="/assets/img/face.svg" />
          No meals, add a new meal to start
        </div>
        <list-item
          *ngFor="let meal of meals"
          [feature]="'meals'"
          [item]="meal"
          (remove)="removeMeal($event)"
        >
        </list-item>
      </div>
      <ng-template #loading>
        <div class="message">
          <img src="/assets/img/loading.svg" />
          Fetching meals...
        </div>
      </ng-template>
    </div>
  `,
  styleUrls: ['./meals.component.scss'],
})
export class MealsComponent implements OnInit, OnDestroy {
  meals$: Observable<Meal[]>;
  subscription: Subscription;

  constructor(private mealsService: MealsService, private store: Store) {}

  ngOnInit(): void {
    this.subscription = this.mealsService.meals$.subscribe();
    this.meals$ = this.store.select('meals');
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  removeMeal(event: Meal) {
    this.mealsService.removeMeal(event.id);
  }
}
