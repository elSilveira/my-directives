import { TestBed } from '@angular/core/testing';

import { MyDirectivesService } from './my-directives.service';

describe('MyDirectivesService', () => {
  let service: MyDirectivesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyDirectivesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
