import {
  ChangeDetectorRef,
  Component,
  inject,
  OnInit
} from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { Session } from '../../models/session.model';
import { ConferenceApiService } from '../../services/conference-api';

@Component({
  selector: 'app-session-details',
  imports: [],
  templateUrl: './session-details.html',
  styleUrl: './session-details.css',
})
export class SessionDetails implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly api = inject(ConferenceApiService);
  private readonly cdr = inject(ChangeDetectorRef);

  session: Session | null = null;

  loading = false;
  errorMessage = '';

  ngOnInit(): void {
    const id = Number(
      this.route.snapshot.paramMap.get('id')
    );

    this.loadSession(id);
  }

  loadSession(id: number): void {
    this.loading = true;
    this.errorMessage = '';
    this.api.getSessionById(id).subscribe({
      next: (session) => {
        console.log('SESSION DETAILS RECEIVED:', session);
        this.session = session;
        this.loading = false;
        this.cdr.markForCheck();
      },

      error: (error) => { console.error('SESSION DETAILS ERROR:', error);
        this.errorMessage = 'Failed to load session.';
        this.loading = false;
        this.cdr.markForCheck();
      }
    });
  }
}
