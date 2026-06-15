import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { providePrimeNG } from 'primeng/config';
import { provideHttpClient } from '@angular/common/http';
import Aura from '@primeuix/themes/aura';



export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),provideHttpClient(),
    provideRouter(routes), provideClientHydration(withEventReplay()), provideAnimations(),
    providePrimeNG({
      theme: {
        preset: Aura
      }
    })
  ]
};
