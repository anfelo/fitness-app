import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Containers
import { MealsComponent } from './containers/meals/meals.component';
import { MealComponent } from './containers/meal/meal.component';

const routes: Routes = [
  {
    path: '',
    component: MealsComponent,
  },
  {
    path: 'new',
    component: MealComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MealsRoutingModule {}
