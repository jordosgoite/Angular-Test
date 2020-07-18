import { TestBed } from '@angular/core/testing';

import { CreatorsApiService } from './creators-api.service';

describe('CreatorsApiService', () => {
  let service: CreatorsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatorsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
