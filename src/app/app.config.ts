import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { provideHttpClient, withFetch } from '@angular/common/http';
export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
  provideRouter(routes, withComponentInputBinding()),
  provideClientHydration(withEventReplay()),
  provideAnimations(),
  provideAnimationsAsync(),
  provideHttpClient(
    withFetch()
  ),
  providePrimeNG({
    theme: {
      preset: Aura,
      options: {
        cssLayer: {
          name: 'primeng',
          order: 'reset, primeng, styles'
      }
      },
    },
    csp: {
      nonce: generateNonce()
    },
  })
  ]
};
function generateNonce(): string  {
  return Math.floor(Math.random() * 1000000000).toString();
}

