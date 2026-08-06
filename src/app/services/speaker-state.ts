import { Injectable, signal } from '@angular/core';
import { CreateSpeaker } from '../models/create-speaker.model';

@Injectable({
  providedIn: 'root',
})
export class SpeakerStateService {

  readonly speakerForm = signal<CreateSpeaker>({
    name: '',
    bio: '',
    webSite: '',
  });

  readonly submittedSpeaker = signal<CreateSpeaker | null>(null);

  readonly uiState = signal<'empty' | 'filled'>('empty');

  submitSpeaker(): void {

    this.submittedSpeaker.set({
      ...this.speakerForm(),
    });

    this.uiState.set('filled');
  }

  updateForm(speaker: CreateSpeaker): void {
    this.speakerForm.set(speaker);
  }
}
