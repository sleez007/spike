import { Component, input, signal } from '@angular/core';
import { Technique } from '../../../../core/layout/types';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-server-accordion',
  imports: [AngularSvgIconModule],
  templateUrl: './server-accordion.html',
  styleUrl: './server-accordion.scss',
})
export class ServerAccordion {
  readonly item = input.required<Technique>();

  readonly isOpen = signal(false);

  toggle() {
    this.isOpen.update((prev) => !prev);
  }
}
