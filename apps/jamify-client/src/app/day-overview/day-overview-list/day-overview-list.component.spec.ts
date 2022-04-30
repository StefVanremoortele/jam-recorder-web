import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayOverviewListComponent } from './day-overview-list.component';

describe('DayOverviewListComponent', () => {
  let component: DayOverviewListComponent;
  let fixture: ComponentFixture<DayOverviewListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DayOverviewListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DayOverviewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
