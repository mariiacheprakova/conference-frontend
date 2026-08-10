import { Injectable, signal } from '@angular/core';
import { CreateSpeaker } from '../models/create-speaker.model';

@Injectable({
  providedIn: 'root',
})
export class SpeakerStateService {

  private readonly _speakerForm = signal<CreateSpeaker>({
    name: '',
    bio: '',
    webSite: '',
  });

  private readonly _submittedSpeaker = signal<CreateSpeaker | null>(null);
  private readonly _uiState = signal<'empty' | 'filled'>('empty');

  readonly speakerForm = this._speakerForm.asReadonly();
  readonly uiState = this._uiState.asReadonly();
  readonly submittedSpeaker = this._submittedSpeaker.asReadonly();

  updateForm(speaker: CreateSpeaker): void {
    this._speakerForm.set(speaker);
  }

  submitSpeaker(): void {
    this._submittedSpeaker.set({
      ...this._speakerForm(),
    });
    this._uiState.set('filled');
  }
}
