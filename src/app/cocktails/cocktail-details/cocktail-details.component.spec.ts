import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CocktailDetailsComponent} from './cocktail-details.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('CocktailDetailsComponent', () => {
  let component: CocktailDetailsComponent;
  let fixture: ComponentFixture<CocktailDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CocktailDetailsComponent, RouterTestingModule, HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CocktailDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
