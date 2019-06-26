import { TestBed } from '@angular/core/testing';

import { NgValidatorService } from './ng-validator.service';

describe('NgValidatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgValidatorService = TestBed.get(NgValidatorService);
    expect(service).toBeTruthy();
  });
});
