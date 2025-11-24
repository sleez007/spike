import { Component } from '@angular/core';
import { DescriptionWrapper } from './partials/description-wrapper/description-wrapper';

@Component({
  selector: 'app-dashboard',
  imports: [DescriptionWrapper],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {}
