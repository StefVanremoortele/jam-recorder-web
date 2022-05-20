import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { compareAsc, format } from 'date-fns'
import { el } from 'date-fns/locale';
import { concatMap, first, groupBy, map, mergeMap, reduce, take, tap, toArray } from 'rxjs';

@Component({
  selector: 'jamify-day-overview-list',
  templateUrl: './day-overview-list.component.html',
  styleUrls: ['./day-overview-list.component.scss'],
})
export class DayOverviewListComponent implements OnInit {
  day: any = new Date();
  numb_hours = 24;
  items: any[] = [];
  audioclips$ = this.http.get<any>('/api/audioclips').pipe(
    map(c => c)
  );

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.initItems();
  }

  initItems() {

  }

}
