import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayTimetableComponent } from './holiday-timetable.component';

describe('HolidayTimetableComponent', () => {
  let component: HolidayTimetableComponent;
  let fixture: ComponentFixture<HolidayTimetableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HolidayTimetableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HolidayTimetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
