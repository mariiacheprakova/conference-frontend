import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { ConferenceApiService } from '../../services/conference-api';

@Component({
  selector: 'app-session-form',
  imports: [ReactiveFormsModule],
  templateUrl: './session-form.html',
  styleUrl: './session-form.css',
})
export class SessionForm {
  private readonly api = inject(ConferenceApiService);

  readonly sessionForm = new FormGroup({
    title: new FormControl('', {nonNullable: true,validators: [Validators.required]}),
    abstract: new FormControl('', {nonNullable: true}),
    startTime: new FormControl('', {nonNullable: true,validators: [Validators.required]}),
    endTime: new FormControl('', {nonNullable: true,validators: [Validators.required]}),
    trackId: new FormControl(1, {nonNullable: true,validators: [Validators.required]})
  });

  isSubmitting = false;
  errorMessage = '';
  successMessage = '';

  submitSession(): void {
    if (this.sessionForm.invalid) {
      this.sessionForm.markAllAsTouched();
      return;
    }

    const session = this.sessionForm.getRawValue();

    this.isSubmitting = true;
    this.errorMessage = '';
    this.successMessage = '';

    this.api.createSession(session).subscribe({
      next: () => {
        this.successMessage = 'Session created successfully.';
        this.isSubmitting = false;

        this.sessionForm.reset({
          title: '',
          abstract: '',
          startTime: '',
          endTime: '',
          trackId: 1
        });
      },

      error: () => {
        this.errorMessage = 'Could not create session.';
        this.isSubmitting = false;
      }
    });
  }
}
