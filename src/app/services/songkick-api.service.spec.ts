import { TestBed } from '@angular/core/testing';

import { SongkickAPIService } from './songkick-api.service';

describe('SongkickAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SongkickAPIService = TestBed.get(SongkickAPIService);
    expect(service).toBeTruthy();
  });
});
