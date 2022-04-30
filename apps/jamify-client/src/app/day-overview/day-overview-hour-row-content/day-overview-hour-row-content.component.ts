import { Component, Input } from '@angular/core';

@Component({
  selector: 'jamify-day-overview-hour-row-content',
  templateUrl: './day-overview-hour-row-content.component.html',
  styleUrls: ['./day-overview-hour-row-content.component.scss'],
})
export class DayOverviewHourRowContentComponent {
  @Input() audioclips!: any[];

  play(url: string) {
    const audio = new Audio() as HTMLAudioElement;
    console.log(url)
    audio.src = url;
    audio.load();
    audio.play();
  }
}
