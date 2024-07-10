import { TestBed } from '@angular/core/testing';

import { CocktailService } from './cocktail.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('CocktailService', () => {
  let service: CocktailService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CocktailService]
    });
    service = TestBed.inject(CocktailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
