import { TestBed } from '@angular/core/testing';

import { Play2048Service } from './play2048.service';

describe('Play2048Service', () => {
  let service: Play2048Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Play2048Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
