import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailFilterComponent } from './cocktail-filter.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('CocktailFilterComponent', () => {
  let component: CocktailFilterComponent;
  let fixture: ComponentFixture<CocktailFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CocktailFilterComponent, BrowserAnimationsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CocktailFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
