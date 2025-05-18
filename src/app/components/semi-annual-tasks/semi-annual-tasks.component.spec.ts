import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemiAnnualTasksComponent } from './semi-annual-tasks.component';

describe('SemiAnnualTasksComponent', () => {
  let component: SemiAnnualTasksComponent;
  let fixture: ComponentFixture<SemiAnnualTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SemiAnnualTasksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SemiAnnualTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
