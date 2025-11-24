import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AssetItem } from '../asset-item/asset-item';
import { Asset } from '../../../../core/layout/types';

@Component({
  selector: 'app-asset-list',
  imports: [MatIconModule, MatButtonModule, AssetItem],
  templateUrl: './asset-list.html',
  styleUrl: './asset-list.scss',
})
export class AssetList {
  assets = signal<Asset[]>([
    {
      id: '1',
      name: 'Loremipsumdolorsit',
      status: 'critical',
      code: '192.168.1.1',
    },
    {
      id: '2',
      name: 'Loremipsumdolorsit002',
      status: 'critical',
      code: '192.168.1.2',
    },
  ]);

  currentPage = signal(1);
  totalPages = signal(2);
}
