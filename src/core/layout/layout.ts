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
  readonly isDesktop = this.layoutService.isDesktop;
  readonly isSideNavCollapsed = this.layoutService.isSideNavCollapsed;
}
