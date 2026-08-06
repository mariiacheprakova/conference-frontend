import { Component, inject } from '@angular/core';
import { CreateSpeaker } from './models/create-speaker.model';
import { Speaker } from './models/speaker.model';
import { SpeakerDataService } from './services/speaker-data';
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

  readonly speakers: readonly Speaker[] =
    this.speakerDataService.getSpeakers();

  submittedSpeaker: CreateSpeaker | null = null;

  handleSpeakerSubmitted(speaker: CreateSpeaker): void {
    this.submittedSpeaker = speaker;
  }
}
