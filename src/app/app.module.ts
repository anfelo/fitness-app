import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

// Store
import { Store } from 'store';

// Fetaure Modules
import { AuthModule } from '../auth/auth.module';
import { HealthModule } from '../health/health.module';

// Containers
import { AppComponent } from './containers/app/app.component';

// Components
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, NavComponent],
  imports: [BrowserModule, AppRoutingModule, AuthModule, HealthModule],
  providers: [Store],
  bootstrap: [AppComponent],
})
export class AppModule {}
