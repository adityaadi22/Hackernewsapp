import { TestBed } from '@angular/core/testing';

import { hackernewsApiService } from './hackernews-api.service';

describe('hackernewsApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: hackernewsApiService = TestBed.get(hackernewsApiService);
    expect(service).toBeTruthy();
  });
});
