import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark mb-3">
      <div class="container-fluid">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" routerLink="home" routerLinkActive="active">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="switch-map" routerLinkActive="active">Switch Map</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="merge-map" routerLinkActive="active">Merge Map</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="concat-map" routerLinkActive="active">Concat Map</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="exhaust-map" routerLinkActive="active">Exhaust Map</a>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="bi bi-gear nav-link configuration-icon-size"
              routerLink="configuration"
              routerLinkActive="active"
            ></a>
          </li>
        </ul>
      </div>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [`
    .configuration-icon-size {
      font-size: 1.75rem;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    RouterModule,
  ]
})
export class AppComponent {

}
