import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, MatSidenavModule],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {}
