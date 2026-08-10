import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { SpeakerStateService } from '../../services/speaker-state';

@Component({
  selector: 'app-speaker-form',
  imports: [ReactiveFormsModule],
  templateUrl: './speaker-form.html',
  styleUrl: './speaker-form.css',
})
export class SpeakerForm {
  private readonly state = inject(SpeakerStateService);

  readonly speakerForm = new FormGroup({
    name: new FormControl('', {nonNullable: true,validators: [Validators.required]}),
    bio: new FormControl('', {nonNullable: true}),
    webSite: new FormControl('', {nonNullable: true})
  });

  successMessage = '';

  submitSpeaker(): void {
    if (this.speakerForm.invalid) {
      this.speakerForm.markAllAsTouched();
      return;
    }

    const speaker = this.speakerForm.getRawValue();

    this.state.updateForm(speaker);
    this.state.submitSpeaker();
    this.successMessage = 'Speaker submitted successfully.';

    this.speakerForm.reset(
      {
        name: '',
        bio: '',
        webSite: '',
      });
  }
}
