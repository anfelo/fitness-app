import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { User } from '../../../auth/shared/services/auth/auth.service';

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./header.component.scss'],
  template: `
    <div class="app-header">
      <div class="wrapper">
        <img src="/assets/img/logo.svg" />
        <div class="app-header__user-info" *ngIf="user?.authenticated">
          <span (click)="logoutUser()"></span>
        </div>
      </div>
    </div>
  `,
})
export class HeaderComponent {
  @Input()
  user: User;

  @Output()
  logout = new EventEmitter<any>();

  logoutUser() {
    this.logout.emit();
  }
}
