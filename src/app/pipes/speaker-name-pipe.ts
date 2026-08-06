import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'speakerName',
})
export class SpeakerNamePipe implements PipeTransform {
  transform(name: string): string {
    return name
      .trim()
      .split(/\s+/)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  }
}
