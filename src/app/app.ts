import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CreateSpeaker } from './models/create-speaker.model';
import { Speaker } from './models/speaker.model';
import { speakers } from './mock-data/speakers';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  readonly speakers: Speaker[] = speakers;

  speakerForm: CreateSpeaker = {
    name: '',
    bio: '',
    webSite: '',
  };

  submittedSpeaker: CreateSpeaker | null = null;

  submitSpeaker(): void {
    this.submittedSpeaker = {
      ...this.speakerForm,
    };
  }
}
