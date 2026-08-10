import { inject } from '@angular/core';
import {
  CanActivateFn,
  Router
} from '@angular/router';
import { catchError, map, of } from 'rxjs';

import { ConferenceApiService } from '../services/conference-api';

export const sessionExistsGuard: CanActivateFn = (route) => {
  const api = inject(ConferenceApiService);
  const router = inject(Router);

  const id = Number(route.paramMap.get('id'));

  if (!id) {
    return router.createUrlTree(['/sessions']);
  }

  return api.getSessionById(id).pipe(
    map(() => true),

    catchError(() =>
      of(router.createUrlTree(['/sessions']))
    )
  );
};
