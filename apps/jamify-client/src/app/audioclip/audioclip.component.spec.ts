import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioclipComponent } from './audioclip.component';

describe('AudioclipComponent', () => {
  let component: AudioclipComponent;
  let fixture: ComponentFixture<AudioclipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AudioclipComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioclipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
