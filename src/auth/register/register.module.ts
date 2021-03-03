import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './containers/register/register.component';
import { ResgisterRoutingModule } from './register-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [RegisterComponent],
  imports: [CommonModule, ResgisterRoutingModule, SharedModule],
  exports: [],
  providers: [],
})
export class RegisterModule {}
