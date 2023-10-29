import { bootstrapApplication } from '@angular/platform-browser';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routes } from './app/app-routing';
import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      /* Hashing location strategy is necessary for Github Pages to work properly
      when changing routes by the browser URL. */
      RouterModule.forRoot(routes, { useHash: true }),
      BrowserAnimationsModule,
    ),
  ]
}).catch(err => console.error(err));
