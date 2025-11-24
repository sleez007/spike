import { Component, input } from '@angular/core';
import { Asset } from '../../../../core/layout/types';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-asset-item',
  imports: [AngularSvgIconModule],
  templateUrl: './asset-item.html',
  styleUrl: './asset-item.scss',
})
export class AssetItem {
  readonly asset = input.required<Asset>();
}
