import { Component, inject } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { menuItems, bottomMenuItems } from './data';
import { SidenavItem } from '../sidenav-item/sidenav-item';
import { LayoutService } from '../../service/layout';
import { MatIconModule } from '@angular/material/icon';
import { Account } from '../account/account';

@Component({
  selector: 'app-sidebar',
  imports: [MatListModule, SidenavItem, MatIconModule, Account],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  private readonly layoutService = inject(LayoutService);
  readonly isMobile = this.layoutService.isMobile;
  readonly menuItems = menuItems;
  readonly bottomMenuItems = bottomMenuItems;

  readonly isCollapsed = this.layoutService.isSideNavCollapsed;

  toggleCollapse() {
    this.layoutService.toggleCollapse();
  }
}
