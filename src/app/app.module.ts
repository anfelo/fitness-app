import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';

// Store
import { Store } from 'store';

// Fetaure Modules
import { AuthModule } from '../auth/auth.module';
import { environment } from '../environments/environment';
import { HealthModule } from '../health/health.module';
import { AppRoutingModule } from './app-routing.module';

// Components
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';

// Containers
import { AppComponent } from './containers/app/app.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, NavComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AuthModule,
    HealthModule,
  ],
  providers: [Store],
  bootstrap: [AppComponent],
})
export class AppModule {}
