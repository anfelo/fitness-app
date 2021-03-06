import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { RouterModule } from '@angular/router';

// Services
import { MealsService } from './services/meals/meals.service';

// Components
import { ListItemComponent } from './components/list-item/list-item.component';

@NgModule({
  declarations: [ListItemComponent],
  imports: [CommonModule, RouterModule, AngularFirestoreModule],
  exports: [ListItemComponent],
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
