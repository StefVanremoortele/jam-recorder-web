import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayOverviewHourRowComponent } from './day-overview-hour-row.component';

describe('DayOverviewHourRowComponent', () => {
  let component: DayOverviewHourRowComponent;
  let fixture: ComponentFixture<DayOverviewHourRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DayOverviewHourRowComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DayOverviewHourRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
