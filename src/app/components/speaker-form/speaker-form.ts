import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SpeakerStateService } from '../../services/speaker-state';

@Component({
  selector: 'app-speaker-form',
  imports: [FormsModule],
  templateUrl: './speaker-form.html',
  styleUrl: './speaker-form.css',
})
export class SpeakerForm {

  private readonly state = inject(SpeakerStateService);
  readonly speakerForm = this.state.speakerForm;

  updateName(name: string): void {
    this.state.updateForm({
      ...this.speakerForm(),
      name,
    });
  }

  updateBio(bio: string): void {
    this.state.updateForm({
      ...this.speakerForm(),
      bio,
    });
  }

  updateWebsite(webSite: string): void {
    this.state.updateForm({
      ...this.speakerForm(),
      webSite,
    });
  }

  submitSpeaker(): void {
this.state.submitSpeaker();
  }
}
