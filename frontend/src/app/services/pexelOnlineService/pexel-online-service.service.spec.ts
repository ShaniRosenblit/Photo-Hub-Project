import { TestBed } from '@angular/core/testing';

import { PexelOnlineServiceService } from './pexel-online-service.service';

describe('PexelOnlineServiceService', () => {
  let service: PexelOnlineServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PexelOnlineServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
