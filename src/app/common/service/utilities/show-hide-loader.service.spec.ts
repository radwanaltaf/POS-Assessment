import { TestBed } from '@angular/core/testing';

import { ShowHideLoaderService } from './show-hide-loader.service';

describe('ShowHideLoaderService', () => {
  let service: ShowHideLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowHideLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
