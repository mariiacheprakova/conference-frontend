import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CreateSpeaker } from '../../models/create-speaker.model';

@Component({
  selector: 'app-speaker-form',
  imports: [FormsModule],
  templateUrl: './speaker-form.html',
  styleUrl: './speaker-form.css',
})
export class SpeakerForm {
  readonly submitted = output<CreateSpeaker>();

  speakerForm: CreateSpeaker = {
    name: '',
    bio: '',
    webSite: '',
  };

  submitSpeaker(): void {
    this.submitted.emit({ ...this.speakerForm });
  }
}
