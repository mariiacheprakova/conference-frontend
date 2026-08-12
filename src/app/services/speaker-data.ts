import { Injectable } from '@angular/core';
import { Speaker } from '../models/speaker.model';
import { speakers } from '../mock-data/speakers';

@Injectable({
  providedIn: 'root',
})
export class SpeakerDataService {
  getSpeakers(): readonly Speaker[] {
    return speakers;
  }
}
