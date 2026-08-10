import { Routes } from '@angular/router';
import { SessionForm } from './components/session-form/session-form';
import { sessionExistsGuard } from './guards/session-exists.guard';

export const routes: Routes = [
  {
    path: 'sessions',
    loadComponent: () =>
      import('./components/session-list/session-list')
        .then(m => m.SessionList)
  },
  {
    path: 'sessions/new',
    component: SessionForm
  },
  {
    path: 'sessions/:id',
    canActivate: [sessionExistsGuard],
    loadComponent: () =>
      import('./components/session-details/session-details')
        .then(m => m.SessionDetails)
  },
  {
    path: '',
    redirectTo: 'sessions',
    pathMatch: 'full'
  }
];
