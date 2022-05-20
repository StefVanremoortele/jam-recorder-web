import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DayOverviewListComponent } from './day-overview-list/day-overview-list.component';
import { DayOverviewHourRowComponent } from './day-overview-hour-row/day-overview-hour-row.component';
import { DayOverviewHourRowIndexComponent } from './day-overview-hour-row-index/day-overview-hour-row-index.component';
import { DayOverviewHourRowContentComponent } from './day-overview-hour-row-content/day-overview-hour-row-content.component';
import { DayOverviewHourAudioclipCardComponent } from './day-overview-hour-audioclip-card/day-overview-hour-audioclip-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    DayOverviewListComponent,
    DayOverviewHourRowComponent,
    DayOverviewHourRowIndexComponent,
    DayOverviewHourRowContentComponent,
    DayOverviewHourAudioclipCardComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    HttpClientModule,
    MatButtonModule,
  ],
  exports: [
    DayOverviewListComponent,
    DayOverviewHourRowComponent,
    DayOverviewHourRowIndexComponent,
    DayOverviewHourRowContentComponent,
    DayOverviewHourAudioclipCardComponent
  ],
})
export class DayOverviewModule { }
