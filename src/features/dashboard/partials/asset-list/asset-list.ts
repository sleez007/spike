import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AssetItem } from '../asset-item/asset-item';
import { Asset, AssetStatus } from '../../../../core/layout/types';

@Component({
  selector: 'app-asset-list',
  imports: [MatIconModule, MatButtonModule, AssetItem],
  templateUrl: './asset-list.html',
  styleUrl: './asset-list.scss',
})
export class AssetList {
  private mockAssets: Asset[] = [
    { id: '1', name: 'Server-01', status: AssetStatus.CRITICAL, code: '192.168.1.1' },
    { id: '2', name: 'Database-Primary', status: AssetStatus.HIGH, code: '192.168.1.2' },
    { id: '3', name: 'Web-Frontend', status: AssetStatus.LOW, code: '192.168.1.3' },
    { id: '4', name: 'API-Gateway', status: AssetStatus.CRITICAL, code: '192.168.1.4' },
    { id: '5', name: 'Cache-Server', status: AssetStatus.MEDIUM, code: '192.168.1.5' },
    { id: '6', name: 'Load-Balancer', status: AssetStatus.LOW, code: '192.168.1.6' },
    { id: '7', name: 'File-Storage', status: AssetStatus.HIGH, code: '192.168.1.7' },
    { id: '8', name: 'Backup-System', status: AssetStatus.MEDIUM, code: '192.168.1.8' },
  ];

  itemsPerPage = 2;
  currentPage = signal(1);
  totalPages = signal(Math.ceil(this.mockAssets.length / this.itemsPerPage));

  assets = signal<Asset[]>(this.getPaginatedAssets());

  private getPaginatedAssets(): Asset[] {
    const start = (this.currentPage() - 1) * this.itemsPerPage;
    return this.mockAssets.slice(start, start + this.itemsPerPage);
  }

  nextPage() {
    if (this.currentPage() < this.totalPages()) {
      this.currentPage.update((page) => page + 1);
      this.assets.set(this.getPaginatedAssets());
    }
  }

  previousPage() {
    if (this.currentPage() > 1) {
      this.currentPage.update((page) => page - 1);
      this.assets.set(this.getPaginatedAssets());
    }
  }
}
