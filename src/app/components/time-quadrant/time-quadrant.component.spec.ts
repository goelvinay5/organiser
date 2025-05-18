import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeQuadrantComponent } from './time-quadrant.component';

describe('TimeQuadrantComponent', () => {
  let component: TimeQuadrantComponent;
  let fixture: ComponentFixture<TimeQuadrantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeQuadrantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeQuadrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
