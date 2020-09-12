import { TestBed } from '@angular/core/testing';

import { TokenStackService } from './token-stack.service';

describe('TokenStackService', () => {
  let service: TokenStackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenStackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
