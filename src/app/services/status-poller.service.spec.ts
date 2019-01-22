import { TestBed } from '@angular/core/testing';

import { StatusPollerService } from './status-poller.service';

describe('StatusPollerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StatusPollerService = TestBed.get(StatusPollerService);
    expect(service).toBeTruthy();
  });
});
