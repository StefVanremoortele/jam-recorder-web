import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayOverviewHourRowContentComponent } from './day-overview-hour-row-content.component';

describe('DayOverviewHourRowContentComponent', () => {
  let component: DayOverviewHourRowContentComponent;
  let fixture: ComponentFixture<DayOverviewHourRowContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DayOverviewHourRowContentComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DayOverviewHourRowContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
