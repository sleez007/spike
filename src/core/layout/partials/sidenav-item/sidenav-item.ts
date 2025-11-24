import { Component, input } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NavItem } from '../../types';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { RouterLinkActive, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidenav-item',
  imports: [MatRippleModule, MatTooltipModule, AngularSvgIconModule, RouterLinkActive, RouterLink],
  templateUrl: './sidenav-item.html',
  styleUrl: './sidenav-item.scss',
})
export class SidenavItem {
  readonly item = input.required<NavItem>();
  readonly isCollapsed = input.required<boolean>();
}
