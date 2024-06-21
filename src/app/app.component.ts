import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark mb-3">
      <div class="container-fluid">
        <button class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#responsiveNavbarArea"
          aria-controls="responsiveNavbarArea"
          aria-expanded="false"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="responsiveNavbarArea">
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
        </div>
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
