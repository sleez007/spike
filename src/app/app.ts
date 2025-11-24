import { Component } from '@angular/core';

import { Layout } from '../core/layout/layout';
import { Sidebar } from '../core/layout/partials/sidebar/sidebar';

@Component({
  selector: 'app-root',
  imports: [Layout, Sidebar],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
