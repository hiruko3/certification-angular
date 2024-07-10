import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FavoriteCocktailComponent} from './favorite-cocktail.component';
import {Cocktail} from "../../../../model/cocktail.model";

describe('FavoriteCocktailComponent', () => {
  let component: FavoriteCocktailComponent;
  let fixture: ComponentFixture<FavoriteCocktailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoriteCocktailComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FavoriteCocktailComponent);
    component = fixture.componentInstance;
    component.cocktail = new Cocktail()
    component.cocktail.id = "123";
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
