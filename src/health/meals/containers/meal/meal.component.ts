import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import {
  Meal,
  MealsService,
} from '../../../shared/services/meals/meals.service';

@Component({
  selector: 'meal',
  styleUrls: ['./meal.component.scss'],
  template: `
    <div class="meal">
      <div class="meal__title">
        <h1>
          <img src="/assets/img/food.svg" />
          <span *ngIf="meal$ | async as meal; else title">
            {{ meal.name ? 'Edit' : 'Create' }} meal
          </span>
          <ng-template #title>Loading...</ng-template>
        </h1>
      </div>
      <div *ngIf="meal$ | async as meal; else loading">
        <meal-form
          [meal]="meal"
          (create)="addMeal($event)"
          (update)="updateMeal($event)"
          (remove)="removeMeal($event)"
        >
        </meal-form>
      </div>
      <ng-template #loading>
        <div class="message">
          <img src="/assets/img/loading.svg" />
          Fetching meal...
        </div>
      </ng-template>
    </div>
  `,
})
export class MealComponent implements OnInit, OnDestroy {
  meal$: Observable<Meal>;
  subscription: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private mealsService: MealsService
  ) {}

  ngOnInit() {
    this.subscription = this.mealsService.meals$.subscribe();
    this.meal$ = this.route.params.pipe(
      switchMap((param) => this.mealsService.getMeal(param.id))
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  async addMeal(meal: Meal) {
    await this.mealsService.addMeal(meal);
    this.backToMeals();
  }

  async updateMeal(meal: Meal) {
    // Alternatively: this.route.snapshot.params.id
    await this.mealsService.updateMeal(meal);
    this.backToMeals();
  }

  async removeMeal(meal: Meal) {
    // Alternatively: this.route.snapshot.params.id
    await this.mealsService.removeMeal(meal.id);
    this.backToMeals();
  }

  backToMeals() {
    this.router.navigate(['meals']);
  }
}
