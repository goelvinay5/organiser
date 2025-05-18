import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartGoalsComponent } from './smart-goals.component';

describe('SmartGoalsComponent', () => {
  let component: SmartGoalsComponent;
  let fixture: ComponentFixture<SmartGoalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmartGoalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
