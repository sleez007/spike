import { Component, inject, input, TemplateRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LayoutService } from './service/layout';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, MatSidenavModule, CommonModule],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {
  private readonly layoutService = inject(LayoutService);
  readonly sidenavRef = input.required<TemplateRef<Element>>();
  readonly isTabletOrDesktop = this.layoutService.isTabletOrDesktop;
  readonly isDesktop = this.layoutService.isDesktop;
  readonly isTablet = this.layoutService.isTablet;
  readonly isMobile = this.layoutService.isMobile;
  readonly isSideNavCollapsed = this.layoutService.isSideNavCollapsed;
}
