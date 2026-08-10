import {
  HttpErrorResponse,
  HttpInterceptorFn
} from '@angular/common/http';

import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn =
  (req, next) => {

    return next(req).pipe(
      catchError((error: HttpErrorResponse) => {

        const preparedError = {
          status: error.status,
          message:
            error.error?.message ??
            'An unexpected server error occurred.'
        };

        return throwError(() => preparedError);
      })
    );
  };
