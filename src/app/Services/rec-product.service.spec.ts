import { TestBed } from '@angular/core/testing';

import { RecProductService } from './rec-product.service';

describe('RecProductService', () => {
  let service: RecProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
