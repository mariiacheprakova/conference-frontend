import { Component, inject } from '@angular/core';
import { Speaker } from './models/speaker.model';
import { SpeakerDataService } from './services/speaker-data';
import { SpeakerStateService } from './services/speaker-state';
import { SpeakerForm } from './components/speaker-form/speaker-form';
import { SpeakerList } from './components/speaker-list/speaker-list';

@Component({
  selector: 'app-root',
  imports: [SpeakerForm, SpeakerList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private readonly speakerDataService = inject(SpeakerDataService);
  private readonly speakerStateService = inject(SpeakerStateService);

  readonly speakers: readonly Speaker[] = this.speakerDataService.getSpeakers();

  readonly submittedSpeaker = this.speakerStateService.submittedSpeaker;
  readonly uiState = this.speakerStateService.uiState;
}
