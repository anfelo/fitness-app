import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MealsRoutingModule } from './meals-routing.module';
import { SharedModule } from '../shared/shared.module';

// Containers
import { MealsComponent } from './containers/meals/meals.component';
import { MealComponent } from './containers/meal/meal.component';

// Components
import { MealFormComponent } from './components/meal-form/meal-form.component';

@NgModule({
  declarations: [MealsComponent, MealComponent, MealFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MealsRoutingModule,
    SharedModule,
  ],
})
export class MealsModule {}
