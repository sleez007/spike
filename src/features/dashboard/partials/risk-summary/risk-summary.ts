import { Component } from '@angular/core';
import { AssetStatus } from '../../../../core/layout/types';

interface RiskSummaryItem {
  status: AssetStatus;
  label: string;
  count: number;
  bgColor: string;
}

@Component({
  selector: 'app-risk-summary',
  imports: [],
  templateUrl: './risk-summary.html',
  styleUrl: './risk-summary.scss',
})
export class RiskSummary {
  riskItems: RiskSummaryItem[] = [
    { status: AssetStatus.CRITICAL, label: 'Critical', count: 2, bgColor: 'bg-red-800' },
    { status: AssetStatus.HIGH, label: 'High', count: 0, bgColor: 'bg-red-700' },
    { status: AssetStatus.MEDIUM, label: 'Medium', count: 0, bgColor: 'bg-yellow-600' },
    { status: AssetStatus.LOW, label: 'Low', count: 0, bgColor: 'bg-green-600' },
  ];

  get totalCriticalCount() {
    return this.riskItems.find((item) => item.status === AssetStatus.CRITICAL)?.count || 0;
  }

  get criticalBorderColor() {
    return (
      this.riskItems.find((item) => item.status === AssetStatus.CRITICAL)?.bgColor || 'bg-red-800'
    );
  }
}
