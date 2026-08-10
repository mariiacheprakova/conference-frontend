import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'speakerName',
  standalone: true,
})
export class SpeakerNamePipe implements PipeTransform {
  transform(name: string): string {
    return `Speaker: ${name}`}
  }


