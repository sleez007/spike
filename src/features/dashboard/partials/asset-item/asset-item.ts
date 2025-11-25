import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';
import { Asset, AssetStatus } from '../../../../core/layout/types';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-asset-item',
  imports: [NgClass, AngularSvgIconModule],
  templateUrl: './asset-item.html',
  styleUrl: './asset-item.scss',
})
export class AssetItem {
  readonly asset = input.required<Asset>();

  getStatusClasses() {
    const status = this.asset().status;
    switch (status) {
      case AssetStatus.CRITICAL:
        return 'text-red-800 bg-red-100';
      case AssetStatus.HIGH:
        return 'text-red-700 bg-red-50';
      case AssetStatus.MEDIUM:
        return 'text-yellow-600 bg-yellow-50';
      case AssetStatus.LOW:
        return 'text-green-600 bg-green-50';
      default:
        return 'text-red-800 bg-red-100';
    }
  }
}
