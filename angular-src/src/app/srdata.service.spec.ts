import { TestBed, inject } from '@angular/core/testing';

import { SrdataService } from './srdata.service';

describe('SrdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SrdataService]
    });
  });

  it('should be created', inject([SrdataService], (service: SrdataService) => {
    expect(service).toBeTruthy();
  }));
});
