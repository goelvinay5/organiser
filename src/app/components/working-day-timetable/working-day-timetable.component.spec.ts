import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingDayTimetableComponent } from './working-day-timetable.component';

describe('WorkingDayTimetableComponent', () => {
  let component: WorkingDayTimetableComponent;
  let fixture: ComponentFixture<WorkingDayTimetableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkingDayTimetableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkingDayTimetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
