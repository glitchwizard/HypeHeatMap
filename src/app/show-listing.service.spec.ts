import { TestBed } from '@angular/core/testing';

import { ShowListingService } from './show-listing.service';

describe('ShowListingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShowListingService = TestBed.get(ShowListingService);
    expect(service).toBeTruthy();
  });
});
