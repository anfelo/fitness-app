import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared/services/auth/auth.service';

@Component({
  selector: 'login',
  template: `
    <div>
      <auth-form (submitted)="handleSubmit($event)">
        <h1>Login</h1>
        <a routerLink="/auth/register">Not registered?</a>
        <button type="submit">Login</button>
        <div class="error" *ngIf="serverMessage">{{ serverMessage }}</div>
      </auth-form>
    </div>
  `,
})
export class LoginComponent implements OnInit {
  loading = false;
  serverMessage: string;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  async handleSubmit(event: FormGroup) {
    this.loading = true;

    const { email, password } = event.value;

    try {
      await this.authService.loginUser(email, password);
      this.router.navigate(['/']);
    } catch (err) {
      this.serverMessage = err;
    }

    this.loading = false;
  }
}
