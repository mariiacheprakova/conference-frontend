import {
  ChangeDetectorRef,
  Component,
  inject,
  OnInit
} from '@angular/core';

import { RouterLink } from '@angular/router';

import { Session } from '../../models/session.model';
import { ConferenceApiService } from '../../services/conference-api';

@Component({
  selector: 'app-session-list',
  imports: [RouterLink],
  templateUrl: './session-list.html',
  styleUrl: './session-list.css',
})
export class SessionList implements OnInit {

  private readonly api = inject(ConferenceApiService);
  private readonly cdr = inject(ChangeDetectorRef);

  sessions: Session[] = [];

  loading = false;
  errorMessage = '';

  ngOnInit(): void {
    this.loadSessions();
  }
  loadSessions(): void {
    this.loading = true;
    this.errorMessage = '';

    this.api.getSessions().subscribe({

      next: (sessions) => {
        console.log('SESSIONS RECEIVED:', sessions);
        this.sessions = sessions;
        this.loading = false;
        this.cdr.markForCheck();
      },

      error: (error) => { console.error('SESSION ERROR:', error);
        this.errorMessage = 'Failed to load sessions.';
        this.loading = false;
        this.cdr.markForCheck();
      }

    });
  }
}
