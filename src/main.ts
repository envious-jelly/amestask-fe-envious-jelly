import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

import { provideHttpClient } from '@angular/common/http';
import { routes } from './app/app.routes';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideAnimations } from '@angular/platform-browser/animations';
import { withInterceptors } from '@angular/common/http';
import { loadingInterceptor } from './app/loading/loading-interceptor';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));


bootstrapApplication(App, {providers: [
  provideHttpClient(withInterceptors([loadingInterceptor])),
  provideHttpClient(),
  provideRouter(routes),
  provideAnimationsAsync(),
  provideAnimations()
]});