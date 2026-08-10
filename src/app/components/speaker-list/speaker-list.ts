import { NgClass, NgTemplateOutlet } from '@angular/common';
import { Component, input } from '@angular/core';
import { Speaker } from '../../models/speaker.model';
import { SpeakerNamePipe } from '../../pipes/speaker-name-pipe';

@Component({
  selector: 'app-speaker-list',
  imports: [NgClass, NgTemplateOutlet, SpeakerNamePipe],
  templateUrl: './speaker-list.html',
  styleUrl: './speaker-list.css',
})
export class SpeakerList {
  readonly speakers = input.required<readonly Speaker[]>();
}
