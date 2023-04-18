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
      RouterModule.forRoot(routes),
      BrowserAnimationsModule,
    ),
  ]
}).catch(err => console.error(err));
