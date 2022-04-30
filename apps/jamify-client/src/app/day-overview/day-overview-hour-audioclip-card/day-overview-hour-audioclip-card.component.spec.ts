import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayOverviewHourAudioclipCardComponent } from './day-overview-hour-audioclip-card.component';

describe('DayOverviewHourAudioclipCardComponent', () => {
  let component: DayOverviewHourAudioclipCardComponent;
  let fixture: ComponentFixture<DayOverviewHourAudioclipCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DayOverviewHourAudioclipCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DayOverviewHourAudioclipCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
