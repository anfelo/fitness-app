import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared/services/auth/auth.service';

@Component({
  selector: 'register',
  template: `
    <div>
      <auth-form (submitted)="handleSubmit($event)">
        <h1>Register</h1>
        <a routerLink="/auth/login">Already have an account?</a>
        <button type="submit">Create account</button>
        <div class="error" *ngIf="serverMessage">{{ serverMessage }}</div>
      </auth-form>
    </div>
  `,
})
export class RegisterComponent implements OnInit {
  loading = false;
  serverMessage: string;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  async handleSubmit(event: FormGroup) {
    this.loading = true;

    const { email, password } = event.value;

    try {
      await this.authService.createUser(email, password);
      this.router.navigate(['/']);
    } catch (err) {
      this.serverMessage = err;
    }

    this.loading = false;
  }
}
