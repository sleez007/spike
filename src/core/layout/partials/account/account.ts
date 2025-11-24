import { Component, input } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-account',
  imports: [AngularSvgIconModule],
  templateUrl: './account.html',
})
export class Account {
  readonly isCollapsed = input.required<boolean>();
}
