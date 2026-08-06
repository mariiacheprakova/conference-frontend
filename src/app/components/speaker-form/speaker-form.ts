import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CreateSpeaker } from '../../models/create-speaker.model';
import { SpeakerStateService } from '../../services/speaker-state';

@Component({
  selector: 'app-speaker-form',
  imports: [FormsModule],
  templateUrl: './speaker-form.html',
  styleUrl: './speaker-form.css',
})
export class SpeakerForm {
  private readonly state = inject(SpeakerStateService);

  speakerForm: CreateSpeaker = {
    ...this.state.speakerForm(),
  };

  submitSpeaker(): void {
    this.state.updateForm({ ...this.speakerForm });
    this.state.submitSpeaker();
  }
}
