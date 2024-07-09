import {Route} from "@angular/router";
import {CocktailsContainerComponent} from "./cocktails-container.component";
import {CocktailDetailsComponent} from "./cocktail-details/cocktail-details.component";

export const COCKTAIL_ROUTES: Route[] = [
  {
    path: '',
    component: CocktailsContainerComponent
  },
  {
    path: ':id',
    component: CocktailDetailsComponent
  }
];

