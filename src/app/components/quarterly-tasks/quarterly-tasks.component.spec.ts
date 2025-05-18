import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuarterlyTasksComponent } from './quarterly-tasks.component';

describe('QuarterlyTasksComponent', () => {
  let component: QuarterlyTasksComponent;
  let fixture: ComponentFixture<QuarterlyTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuarterlyTasksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuarterlyTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
