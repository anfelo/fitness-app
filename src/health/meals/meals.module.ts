import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MealsRoutingModule } from './meals-routing.module';

// Containers
import { MealsComponent } from './containers/meals/meals.component';

@NgModule({
  declarations: [MealsComponent],
  imports: [CommonModule, ReactiveFormsModule, MealsRoutingModule],
})
export class MealsModule {}
