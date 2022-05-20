import { Component, Input, OnInit } from '@angular/core';
import { Audioclip } from '@jamify/api-interfaces';

@Component({
  selector: 'jamify-day-overview-hour-row',
  templateUrl: './day-overview-hour-row.component.html',
  styleUrls: ['./day-overview-hour-row.component.scss'],
})
export class DayOverviewHourRowComponent {
  @Input() data!: any;
}
