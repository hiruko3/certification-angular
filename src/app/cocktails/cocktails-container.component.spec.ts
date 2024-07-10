import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CocktailsContainerComponent} from './cocktails-container.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('CocktailsListComponent', () => {
  let component: CocktailsContainerComponent;
  let fixture: ComponentFixture<CocktailsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CocktailsContainerComponent, BrowserAnimationsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CocktailsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
