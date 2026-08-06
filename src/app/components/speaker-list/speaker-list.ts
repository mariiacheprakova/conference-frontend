import { NgClass, NgTemplateOutlet } from '@angular/common';
import { Component, input } from '@angular/core';
import { Speaker } from '../../models/speaker.model';

@Component({
  selector: 'app-speaker-list',
  imports: [NgClass, NgTemplateOutlet],
  templateUrl: './speaker-list.html',
  styleUrl: './speaker-list.css',
})
export class SpeakerList {
  readonly speakers = input.required<readonly Speaker[]>();
}
