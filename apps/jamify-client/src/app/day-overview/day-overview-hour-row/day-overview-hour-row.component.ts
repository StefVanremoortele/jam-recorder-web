import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'jamify-day-overview-hour-row',
  templateUrl: './day-overview-hour-row.component.html',
  styleUrls: ['./day-overview-hour-row.component.scss'],
})
export class DayOverviewHourRowComponent {
  @Input() data: any;
}
