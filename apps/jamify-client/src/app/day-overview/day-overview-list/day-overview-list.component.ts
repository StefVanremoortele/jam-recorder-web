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
  data$ = this.http.get<any>('/api/directories').pipe(
    mergeMap(d => d
      .filter((o: any) => o.day === format(this.day, 'yyyy-MM-dd'))
      .map((d: any) => d.items)
    ),
  )

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.initItems();
  }

  initItems() {
    this.data$.subscribe((d: any) => {
      for (let i = 0; i < this.numb_hours; i++) {
        // console.log(d[i]?.hour === i.toString())
        // console.log(d[i]?.hour)
        // console.log(i.toString())
        const item = d.find( (di: any) =>  di.hour === i.toString());
        if (item && item.hour === i.toString()) {
          console.log("ever?")
          this.items.push({
            hour: item.hour,
            items: item.items
          })
        } else {
          this.items.push({
            hour: i,
            items: []
          });
        }
      };
      // d.forEach((element: any) => {
      //   this.items.push({
      //     hour: element.hour,
      //     items: element.items
      //   })
      // });
    })
  }

}
