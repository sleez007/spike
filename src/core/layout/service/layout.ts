import { inject, Injectable, signal } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  private readonly breakPointObserver = inject(BreakpointObserver);
  readonly isSideNavCollapsed = signal(false);
  readonly isSideNavOpen = signal(true);

  private readonly isTabletOrDesktop$ = this.breakPointObserver
    .observe(`(min-width: 800px)`)
    .pipe(map((state) => state.matches));

  private readonly isDesktop$ = this.breakPointObserver
    .observe(`(min-width: 1280px)`)
    .pipe(map((state) => state.matches));
  private readonly isTablet$ = this.breakPointObserver
    .observe(`(max-width: 800px)`)
    .pipe(map((state) => state.matches));
  private readonly isMobile$ = this.breakPointObserver
    .observe(`(max-width: 599px)`)
    .pipe(map((state) => state.matches));

  readonly isDesktop = toSignal(this.isDesktop$);
  readonly isTablet = toSignal(this.isTablet$);
  readonly isMobile = toSignal(this.isMobile$);
  readonly isTabletOrDesktop = toSignal(this.isTabletOrDesktop$);

  toggleSideNav() {
    this.isSideNavOpen.update((value) => !value);
  }

  toggleCollapse() {
    this.isSideNavCollapsed.update((value) => !value);
  }
}
