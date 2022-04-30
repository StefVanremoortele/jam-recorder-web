import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayOverviewHourRowIndexComponent } from './day-overview-hour-row-index.component';

describe('DayOverviewHourRowIndexComponent', () => {
  let component: DayOverviewHourRowIndexComponent;
  let fixture: ComponentFixture<DayOverviewHourRowIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DayOverviewHourRowIndexComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DayOverviewHourRowIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
