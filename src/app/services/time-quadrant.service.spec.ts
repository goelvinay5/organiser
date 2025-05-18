import { TestBed } from '@angular/core/testing';

import { TimeQuadrantService } from './time-quadrant.service';

describe('TimeQuadrantService', () => {
  let service: TimeQuadrantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeQuadrantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
