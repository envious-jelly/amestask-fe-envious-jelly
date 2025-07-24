import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Busy } from './busy';
import { delay, finalize } from 'rxjs';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const busyService = inject(Busy);

  busyService.busy();

  return next(req).pipe(
    //delay(2000), // testiranje
    finalize(() => busyService.idle())
  );
};
