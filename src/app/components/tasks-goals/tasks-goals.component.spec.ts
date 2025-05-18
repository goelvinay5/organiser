import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksGoalsComponent } from './tasks-goals.component';

describe('TasksGoalsComponent', () => {
  let component: TasksGoalsComponent;
  let fixture: ComponentFixture<TasksGoalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasksGoalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasksGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
