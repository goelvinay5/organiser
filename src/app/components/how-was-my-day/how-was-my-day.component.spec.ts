import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowWasMyDayComponent } from './how-was-my-day.component';

describe('HowWasMyDayComponent', () => {
  let component: HowWasMyDayComponent;
  let fixture: ComponentFixture<HowWasMyDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowWasMyDayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowWasMyDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
