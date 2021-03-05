import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthRoutingModule,
    AngularFireAuthModule,
    SharedModule.forRoot(),
  ],
  exports: [],
  providers: [],
})
export class AuthModule {}
