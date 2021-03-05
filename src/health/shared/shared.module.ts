import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { RouterModule } from '@angular/router';

import { MealsService } from './services/meals/meals.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule, AngularFirestoreModule],
  exports: [],
  providers: [],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [MealsService],
    };
  }
}
