import { TestBed } from '@angular/core/testing';

import { PopAddPersonaService } from './pop-add-persona.service';

describe('PopAddPersonaService', () => {
  let service: PopAddPersonaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopAddPersonaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
