import { TestBed } from '@angular/core/testing';

import { GameResovlerService } from './game-resovler.service';

describe('GamessService', () => {
  let service: GameResovlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameResovlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
