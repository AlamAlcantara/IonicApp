import { TestBed } from '@angular/core/testing';

import { CalendarificService } from './calendarific.service';

describe('CalendarificService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalendarificService = TestBed.get(CalendarificService);
    expect(service).toBeTruthy();
  });
});
