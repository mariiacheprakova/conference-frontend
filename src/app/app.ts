import { Component, inject, OnInit } from '@angular/core';

import { Speaker } from './models/speaker.model';
import { Session } from './models/session.model';

import { SpeakerDataService } from './services/speaker-data';
import { SpeakerStateService } from './services/speaker-state';
import { ConferenceApiService } from './services/conference-api';

import { SpeakerForm } from './components/speaker-form/speaker-form';
import { SpeakerList } from './components/speaker-list/speaker-list';
import { SessionForm } from './components/session-form/session-form';

@Component({
  selector: 'app-root',
  imports: [
    SpeakerForm,
    SpeakerList,
    SessionForm
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  private readonly speakerDataService = inject(SpeakerDataService);
  private readonly speakerStateService = inject(SpeakerStateService);
  private readonly conferenceApi = inject(ConferenceApiService);
  readonly speakers: readonly Speaker[] = this.speakerDataService.getSpeakers();
  readonly submittedSpeaker = this.speakerStateService.submittedSpeaker;
  readonly uiState = this.speakerStateService.uiState;

  sessions: Session[] = [];

  loading = false;
  errorMessage = '';

  ngOnInit(): void {
    this.loadSessions();
  }

  loadSessions(): void {
    this.loading = true;
    this.errorMessage = '';

    this.conferenceApi.getSessions().subscribe({
      next: (sessions) => {
        this.sessions = sessions;
        this.loading = false;
      },

      error: () => {
        this.errorMessage = 'Failed to load sessions.';
        this.loading = false;
      }
    });
  }
}
