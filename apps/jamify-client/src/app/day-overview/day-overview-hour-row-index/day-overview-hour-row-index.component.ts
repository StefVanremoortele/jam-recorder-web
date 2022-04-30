import { Component, Input} from '@angular/core';

@Component({
  selector: 'jamify-day-overview-hour-row-index',
  templateUrl: './day-overview-hour-row-index.component.html',
  styleUrls: ['./day-overview-hour-row-index.component.scss'],
})
export class DayOverviewHourRowIndexComponent {
  @Input() index!: any;
}
