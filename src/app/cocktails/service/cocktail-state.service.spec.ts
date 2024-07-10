import {TestBed} from '@angular/core/testing';

import {CocktailStateService} from './cocktail-state.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('CocktailStateService', () => {
  let service: CocktailStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CocktailStateService]
    });
    service = TestBed.inject(CocktailStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
