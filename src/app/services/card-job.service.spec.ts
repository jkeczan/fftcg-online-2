import { TestBed } from '@angular/core/testing';

import { CardJobService } from './card-job.service';

describe('CardJobService', () => {
  let service: CardJobService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardJobService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
