import { Component } from '@angular/core';
import { DescriptionWrapper } from './partials/description-wrapper/description-wrapper';
import { RiskSummary } from './partials/risk-summary/risk-summary';
import { AssetList } from './partials/asset-list/asset-list';
import { Flow } from './partials/flow/flow';

@Component({
  selector: 'app-dashboard',
  imports: [DescriptionWrapper, RiskSummary, AssetList, Flow],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {}
