import { TestBed } from '@angular/core/testing';

import { GameSpaceService } from './game-space.service';

describe('GameSpaceService', () => {
  let service: GameSpaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameSpaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
